import { EventEmitter } from 'node:events';
import { Discovery } from './discovery.js';
import type { Product } from './signer.js';
import type { ClientState, ChatEvent, Gift, GiftEvent, LikeEvent, LiveEvent, MemberEvent, ReconnectPolicy, RoomInfo, RoomUserEvent, SocialEvent, UnknownEvent, WebSocketConstructor } from './types.js';
import type { Identity } from './player.js';
export declare const DEFAULT_RECONNECT: Readonly<ReconnectPolicy>;
export interface TikTokLiveOptions {
    sessionCookie?: string;
    userAgent?: string;
    roomId?: string;
    deviceId?: string;
    fetchGifts?: boolean;
    fetchRoomInfo?: boolean;
    identity?: Identity;
    socketHost?: string;
    reconnect?: Partial<ReconnectPolicy>;
    signer?: SignerLike;
    bundleSource?: string;
    bundlePath?: string;
    bundleUrl?: string;
    WebSocketImpl?: WebSocketConstructor;
    discovery?: Discovery;
}
export interface SignerLike {
    sign(url: string, product?: Product): string;
}
export interface TikTokLiveEvents {
    connected: [ClientState];
    disconnected: [{
        code: number;
        reason: string;
    }];
    reconnecting: [{
        attempt: number;
        delayMs: number;
    }];
    error: [Error];
    event: [LiveEvent];
    chat: [ChatEvent];
    gift: [GiftEvent];
    like: [LikeEvent];
    member: [MemberEvent];
    social: [SocialEvent];
    roomUser: [RoomUserEvent];
    unknown: [UnknownEvent];
}
export declare class TikTokLive extends EventEmitter<TikTokLiveEvents> {
    #private;
    readonly uniqueId: string;
    roomId: string;
    nickname: string;
    roomInfo: RoomInfo | null;
    gifts: Map<string, Gift>;
    connected: boolean;
    readonly discovery: Discovery;
    constructor(uniqueId: string, options?: TikTokLiveOptions);
    connect(): Promise<ClientState>;
    state(): ClientState;
    disconnect(): void;
}
export declare function cookieFromFile(path: string): string;
export declare class NotLiveError extends Error {
    readonly code = "NOT_LIVE";
}
//# sourceMappingURL=client.d.ts.map