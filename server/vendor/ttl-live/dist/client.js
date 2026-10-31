// One class for the whole thing: resolve a room, sign the socket, connect, decode, reconnect.
//
// The flow is the web player's, not the old connector's. The player configures its IM SDK with
// `wsDirect: "1"` and a `socketHost`, and the SDK builds and signs the socket URL itself — there is
// no `/webcast/im/fetch/` on the path, and nothing here needs a `push_server` from anywhere. That
// is why this library needs no sign server: the only signed thing is a query string, and the code
// that signs it is TikTok's own bundle running in this process.
//
// What is required is a TikTok-issued client identity. A normal public `/live` navigation supplies
// an anonymous `ttwid` identity, so an account session is optional for public rooms.
import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import { Discovery } from './discovery.js';
import { EVENT, decodeEvent } from './events.js';
import { ackFrame, carriesEvents, decodeBatch, decodePushFrame, decompress } from './frames.js';
import { IDENTITY, PATH, SOCKET_HOST, enterRoomFrame, heartbeatFrame, socketConfig, socketQuery, } from './player.js';
import { PRODUCT, Signer } from './signer.js';
import { GuestSessionError, USER_AGENT, bootstrapGuestSession, cookieHeader, parseCookies, sessionJar, } from './session.js';
/// Reconnection, matching the Rust client's policy: five attempts, doubling from two seconds, and
/// never past a minute. A signature ages and a room can move its push server, so a reconnect
/// re-signs from scratch rather than reusing the URL that just failed.
export const DEFAULT_RECONNECT = Object.freeze({
    attempts: 5,
    initialMs: 2_000,
    maxMs: 60_000,
});
/// The device id the query claims. The page uses its own `tt_webid_v2`, so a session that carries
/// one is used, and this is only the fallback.
const FALLBACK_DEVICE_ID = '7300000000000000001';
/// How long to wait for the handshake before calling it refused.
const OPEN_TIMEOUT_MS = 15_000;
/// Node timers clamp larger delays to a one-millisecond timeout, so keep a server-provided
/// heartbeat duration within the largest delay they can represent.
const MAX_HEARTBEAT_MS = 2_147_483_647;
class HandshakeRejectedError extends Error {
    code = 'WS_HANDSHAKE_REJECTED';
    closeCode;
    constructor(message, closeCode) {
        super(message);
        this.name = 'HandshakeRejectedError';
        this.closeCode = closeCode;
    }
}
export class TikTokLive extends EventEmitter {
    uniqueId;
    roomId;
    nickname = '';
    roomInfo = null;
    gifts = new Map();
    connected = false;
    discovery;
    #options;
    #socket = null;
    #heartbeat = null;
    #signer = null;
    #guestSession = null;
    #guestMode = false;
    #guestRefreshAttempted = false;
    #connecting = null;
    #closing = false;
    #attempt = 0;
    /// `uniqueId` is the `@handle`. Everything else has a working default.
    constructor(uniqueId, options = {}) {
        super();
        const cookie = options.sessionCookie ?? cookieHeader(sessionJar());
        this.uniqueId = String(uniqueId).replace(/^@/, '');
        this.roomId = options.roomId ?? '';
        this.#options = {
            cookie,
            userAgent: options.userAgent ?? USER_AGENT,
            deviceId: options.deviceId ?? '',
            fetchGifts: options.fetchGifts ?? true,
            fetchRoomInfo: options.fetchRoomInfo ?? true,
            identity: options.identity ?? IDENTITY.audience,
            socketHost: options.socketHost ?? SOCKET_HOST.global,
            reconnect: { ...DEFAULT_RECONNECT, ...(options.reconnect ?? {}) },
            signer: options.signer ?? null,
            bundleSource: options.bundleSource,
            bundlePath: options.bundlePath,
            bundleUrl: options.bundleUrl,
            // Injectable so a caller on an older Node, or one that prefers `ws`, can pass its own.
            // The global needs to accept a `headers` option, because the cookie travels there.
            WebSocketImpl: options.WebSocketImpl ?? globalThis.WebSocket,
            discovery: options.discovery ?? null,
        };
        this.discovery = this.#options.discovery ?? new Discovery({
            cookie: this.#options.cookie,
            userAgent: this.#options.userAgent,
        });
    }
    /// Resolve the room, sign, and open the socket. Resolves once the socket is open and the room
    /// has been entered; events arrive on this emitter from then on.
    connect() {
        if (this.connected)
            return Promise.resolve(this.state());
        if (this.#connecting)
            return this.#connecting;
        const connecting = this.#connect();
        this.#connecting = connecting;
        void connecting.finally(() => {
            if (this.#connecting === connecting)
                this.#connecting = null;
        }).catch(() => undefined);
        return connecting;
    }
    async #connect() {
        this.#closing = false;
        await this.#ensureSession();
        if (!this.roomId) {
            const lookup = await this.discovery.roomLookup(this.uniqueId);
            if (!lookup.isLive) {
                throw new NotLiveError(`@${this.uniqueId} is not live (status ${lookup.status})`);
            }
            this.roomId = lookup.roomId;
            this.nickname = lookup.nickname;
        }
        // Metadata and the gift table are read once, not per event: the gift list is megabytes, and it
        // is what turns a repeat gift message — which omits its own detail block — into a real value.
        if (this.#options.fetchRoomInfo) {
            this.roomInfo = await this.discovery.roomInfo(this.roomId).catch(() => null);
        }
        if (this.#options.fetchGifts) {
            this.gifts = await this.discovery.giftList(this.roomId).catch(() => new Map());
        }
        await this.#ensureSigner();
        if (this.#closing)
            throw new Error('connection cancelled');
        await this.#open();
        return this.state();
    }
    /// Use a supplied/stored jar, or create one anonymous TikTok guest identity for this client.
    /// The promise prevents concurrent callers from bootstrapping two identities and keeps the
    /// in-memory jar stable across reconnects.
    async #ensureSession() {
        if (this.#options.cookie) {
            this.discovery.setCookie(this.#options.cookie);
            return;
        }
        if (!this.#guestSession) {
            this.#guestMode = true;
            this.#guestSession = bootstrapGuestSession({ userAgent: this.#options.userAgent })
                .then((identity) => {
                this.#options.cookie = identity.cookie;
                this.discovery.setCookie(identity.cookie);
            })
                .catch((error) => {
                this.#guestSession = null;
                throw error;
            });
        }
        await this.#guestSession;
    }
    async #ensureSigner() {
        if (this.#signer)
            return;
        this.#signer =
            this.#options.signer ??
                (await Signer.create({
                    bundleSource: this.#options.bundleSource,
                    bundlePath: this.#options.bundlePath,
                    bundleUrl: this.#options.bundleUrl,
                    userAgent: this.#options.userAgent,
                    cookie: this.#options.cookie,
                }));
    }
    /// A guest identity can expire while a long-lived socket is down. Replace the whole identity,
    /// including the signer context, once; a deterministic refusal after that is terminal.
    async #refreshGuestSession() {
        this.#guestSession = null;
        this.#options.cookie = '';
        this.#signer = null;
        await this.#ensureSession();
        await this.#ensureSigner();
    }
    /// Room, viewers, and whether the socket is up.
    state() {
        return {
            uniqueId: this.uniqueId,
            roomId: this.roomId,
            connected: this.connected,
            roomInfo: this.roomInfo,
            giftCount: this.gifts.size,
        };
    }
    /// Close the socket and stop reconnecting.
    disconnect() {
        this.#closing = true;
        this.#stopHeartbeat();
        try {
            this.#socket?.close();
        }
        catch {
            // Already gone.
        }
        this.#socket = null;
        this.connected = false;
    }
    // --- the socket ------------------------------------------------------------------------------
    async #open() {
        const jar = parseCookies(this.#options.cookie);
        const config = socketConfig({
            roomId: this.roomId,
            deviceId: this.#options.deviceId || jar.get('tt_webid_v2') || jar.get('tt_webid') || FALLBACK_DEVICE_ID,
            identity: this.#options.identity,
            socketHost: this.#options.socketHost,
        });
        const query = socketQuery(config);
        // Signed as one string, then opened verbatim. The signature covers these exact bytes, so the
        // URL must not be rebuilt, re-encoded, or reordered between here and the handshake.
        const signer = this.#signer;
        if (!signer)
            throw new Error('signer was not initialized');
        const url = signer.sign(`${config.socketHost}${PATH.wsReuseSupplement}?${query}`, PRODUCT.ws);
        const Impl = this.#options.WebSocketImpl;
        if (!Impl) {
            throw new Error('no WebSocket implementation: use Node 22+, or pass `WebSocketImpl`');
        }
        await new Promise((resolve, reject) => {
            let settled = false;
            let opened = false;
            const socket = new Impl(url, {
                headers: {
                    cookie: this.#options.cookie,
                    'user-agent': this.#options.userAgent,
                    origin: 'https://www.tiktok.com',
                },
            });
            socket.binaryType = 'arraybuffer';
            this.#socket = socket;
            const timer = setTimeout(() => {
                if (settled)
                    return;
                settled = true;
                try {
                    socket.close();
                }
                catch {
                    // Already gone.
                }
                reject(new Error(`the socket did not open within ${OPEN_TIMEOUT_MS} ms`));
            }, OPEN_TIMEOUT_MS);
            socket.addEventListener('open', () => {
                if (settled)
                    return;
                if (this.#closing) {
                    settled = true;
                    clearTimeout(timer);
                    socket.close();
                    reject(new Error('connection cancelled'));
                    return;
                }
                opened = true;
                // The server pushes nothing until the client says which room it is in. A socket that
                // opened and stayed silent is almost always a missing enter-room frame.
                socket.send(enterRoomFrame({ roomId: this.roomId, identity: config.identity }));
                this.#startHeartbeat(Number(config.heartbeatDuration));
                this.connected = true;
                this.#attempt = 0;
                this.#guestRefreshAttempted = false;
                clearTimeout(timer);
                if (!settled) {
                    settled = true;
                    resolve();
                }
                this.emit('connected', this.state());
            });
            socket.addEventListener('message', (message) => this.#receive(message.data));
            socket.addEventListener('error', (event) => {
                const error = new Error(event.message ?? 'socket error');
                if (settled)
                    this.emit('error', error);
            });
            socket.addEventListener('close', (event) => {
                this.connected = false;
                this.#stopHeartbeat();
                clearTimeout(timer);
                if (!opened) {
                    if (!settled) {
                        settled = true;
                        // A refusal at the handshake is not a network blip. Retrying the same identity just
                        // repeats the refusal, so identify whether the caller supplied an account session.
                        const authenticated = parseCookies(this.#options.cookie).has('sessionid');
                        reject(authenticated
                            ? new HandshakeRejectedError(`the handshake was refused (code ${event.code}). The socket rejected the ` +
                                'provided authenticated session before any frame was exchanged.', event.code)
                            : new GuestSessionError('WS_HANDSHAKE_REJECTED', `anonymous guest WebSocket handshake was rejected (code ${event.code}). ` +
                                'Provide a TikTok session cookie if authenticated transport is required.', undefined, event.code));
                    }
                    return;
                }
                this.emit('disconnected', { code: event.code, reason: String(event.reason ?? '') });
                if (!this.#closing)
                    this.#scheduleReconnect();
            });
        });
    }
    #receive(data) {
        let frame;
        try {
            frame = decodePushFrame(data);
        }
        catch (error) {
            this.emit('error', toError(error));
            return;
        }
        // `hb`, `ack` and `im_enter_room_resp` are the transport talking to itself.
        if (!carriesEvents(frame))
            return;
        let batch;
        try {
            batch = decodeBatch(decompress(frame));
        }
        catch (error) {
            this.emit('error', toError(error));
            return;
        }
        // The batch owns the transport's heartbeat hint. Keep it as generated bigint until this
        // application boundary, then clamp it to the range accepted by Node's timers.
        if (batch.heartbeatDuration > 0n) {
            const maxHeartbeat = BigInt(MAX_HEARTBEAT_MS);
            const boundedHeartbeat = batch.heartbeatDuration > maxHeartbeat
                ? maxHeartbeat
                : batch.heartbeatDuration;
            const heartbeatMs = Number(boundedHeartbeat);
            if (heartbeatMs > 0)
                this.#startHeartbeat(heartbeatMs);
        }
        // Acknowledge before decoding events, not after: an unacknowledged frame stops the push a few
        // seconds later, and a slow listener must not be able to cause that.
        if (batch.needAck) {
            try {
                this.#socket?.send(ackFrame(frame, batch.internalExt));
            }
            catch (error) {
                this.emit('error', toError(error));
            }
        }
        for (const message of batch.messages) {
            const event = this.#enrich(decodeEvent(message.method, message.payload));
            event.msgId = message.msgId.toString();
            event.isHistory = message.isHistory;
            this.emit('event', event);
            this.#emitTypedEvent(event);
        }
    }
    /// Fill in what the message left out. A repeat gift carries no detail block, so its name and
    /// price come from the room's gift table. Also attach icon URL for renderer.
    #enrich(event) {
        if (event.type !== EVENT.gift)
            return event;
        const gift = this.gifts.get(event.giftId);
        if (!gift)
            return event;
        return {
            ...event,
            giftName: event.giftName || gift.name,
            diamondCount: event.diamondCount || gift.diamondCount,
            giftIconUrl: gift.iconUrl || undefined,
            /// Streakable gifts arrive as a burst; only `repeatEnd` is the real total. Anything that
            /// sums diamonds must ignore the rest, and this is what says which is which.
            streakable: gift.combo,
        };
    }
    #startHeartbeat(everyMs) {
        this.#stopHeartbeat();
        // The application heartbeat, not a protocol ping: the socket closes without it, and protocol
        // pings are not answered.
        this.#heartbeat = setInterval(() => {
            try {
                this.#socket?.send(heartbeatFrame(this.roomId));
            }
            catch {
                // The close handler deals with a dead socket.
            }
        }, everyMs || 10_000);
        this.#heartbeat.unref?.();
    }
    #stopHeartbeat() {
        if (this.#heartbeat)
            clearInterval(this.#heartbeat);
        this.#heartbeat = null;
    }
    #scheduleReconnect() {
        const { attempts, initialMs, maxMs } = this.#options.reconnect;
        if (this.#attempt >= attempts) {
            this.emit('error', new Error(`gave up after ${attempts} reconnection attempts`));
            return;
        }
        this.#attempt += 1;
        const delayMs = Math.min(initialMs * 2 ** (this.#attempt - 1), maxMs);
        this.emit('reconnecting', { attempt: this.#attempt, delayMs });
        const timer = setTimeout(() => {
            if (this.#closing)
                return;
            // Re-signed from scratch: the previous signature is what the server just stopped accepting.
            void this.#reconnect();
        }, delayMs);
        timer.unref?.();
    }
    async #reconnect() {
        try {
            await this.#open();
            return;
        }
        catch (error) {
            const refusal = isHandshakeRejected(error);
            if (!refusal) {
                this.emit('error', toError(error));
                if (!this.#closing)
                    this.#scheduleReconnect();
                return;
            }
            // Never cycle a rejected identity. Automatic guest mode gets one fresh bootstrap and one
            // fresh signer context; supplied/stored identities stop immediately on refusal.
            if (this.#guestMode && !this.#guestRefreshAttempted && !this.#closing) {
                this.#guestRefreshAttempted = true;
                try {
                    await this.#refreshGuestSession();
                    if (!this.#closing)
                        await this.#open();
                }
                catch (refreshError) {
                    if (!this.#closing)
                        this.emit('error', toError(refreshError));
                }
                return;
            }
            if (!this.#closing)
                this.emit('error', toError(error));
        }
    }
    #emitTypedEvent(event) {
        switch (event.type) {
            case EVENT.chat:
                this.emit('chat', event);
                break;
            case EVENT.gift:
                this.emit('gift', event);
                break;
            case EVENT.like:
                this.emit('like', event);
                break;
            case EVENT.member:
                this.emit('member', event);
                break;
            case EVENT.social:
                this.emit('social', event);
                break;
            case EVENT.roomUser:
                this.emit('roomUser', event);
                break;
            case EVENT.unknown:
                this.emit('unknown', event);
                break;
        }
    }
}
/// Read a cookie header from a file, for callers keeping the session somewhere of their own.
export function cookieFromFile(path) {
    return fs.readFileSync(path, 'utf8').trim();
}
export class NotLiveError extends Error {
    code = 'NOT_LIVE';
}
function toError(error) {
    return error instanceof Error ? error : new Error(String(error));
}
function isHandshakeRejected(error) {
    return (error instanceof GuestSessionError && error.code === 'WS_HANDSHAKE_REJECTED')
        || error instanceof HandshakeRejectedError;
}
//# sourceMappingURL=client.js.map