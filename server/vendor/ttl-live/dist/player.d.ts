export declare const SOCKET_HOST: Readonly<{
    global: "wss://webcast-ws.tiktok.com";
    us: "wss://webcast-ws.us.tiktok.com";
    eu: "wss://webcast-ws.eu.tiktok.com";
}>;
export declare const PATH: Readonly<{
    fetch: "/webcast/im/fetch/";
    fetchHistory: "/webcast/im/fetch/history/";
    fetchPreview: "/webcast/im/fetch/preview/";
    wsReuseSupplement: "/webcast/im/ws_proxy/ws_reuse_supplement/";
    wsFromPreview: "/webcast/im/ws_proxy/from_preview/";
}>;
export declare const SDK_VERSION_CODE = "180800";
export declare const CONFIG_VERSION_CODE = "270000";
export declare const UPDATE_VERSION_CODE = "2.0.0";
export declare const AID = "1988";
export declare const APP_NAME = "tiktok_web";
export declare const LIVE_ID = "12";
export declare const HEARTBEAT_MS = "10000";
export declare const IDENTITY: Readonly<{
    audience: "audience";
    anchor: "anchor";
}>;
export type Identity = (typeof IDENTITY)[keyof typeof IDENTITY];
export declare const COMPRESSION: Readonly<{
    gzip: "gzip";
    none: "";
}>;
export type Compression = (typeof COMPRESSION)[keyof typeof COMPRESSION];
export declare const FRAME_TYPE: Readonly<{
    enterRoom: "im_enter_room";
    previewRoom: "im_preview_room";
    heartbeat: "hb";
    ack: "ack";
}>;
export type QueryPrimitive = string | number | boolean | bigint;
export type QueryValue = QueryPrimitive | null | undefined;
type QueryRecord = Record<string, unknown>;
export interface BrowserBlockOptions {
    userAgent?: string;
    screenWidth?: number;
    screenHeight?: number;
    browserLanguage?: string;
    browserPlatform?: string;
    tzName?: string;
}
export interface SocketConfigOptions {
    roomId: string;
    deviceId?: string;
    identity?: Identity;
    compress?: Compression;
    socketHost?: string;
    appLanguage?: string;
}
export interface SocketConfig {
    aid: string;
    appName: string;
    liveId: string;
    versionCode: string;
    appLanguage: string;
    socketHost: string;
    wsDirect: string;
    fetchBeforeWsSuccess: string;
    clientEnter: string;
    roomId: string;
    identity: Identity;
    deviceId: string;
    compress: Compression;
    lastRtt: string;
    cursor: string;
    internalExt: string;
    historyCommentCursor: string;
    heartbeatDuration: string;
    didRule?: QueryValue;
    pushServer?: string;
    routeParamsMap?: Readonly<Record<string, QueryValue>>;
    host?: string;
    debug?: boolean;
    filterByRoomId?: QueryValue;
    [key: string]: unknown;
}
export declare function browserBlock({ userAgent, screenWidth, screenHeight, browserLanguage, browserPlatform, tzName, }?: BrowserBlockOptions): Record<string, string>;
export declare function strip(props: QueryRecord): Record<string, QueryValue>;
export declare function withDefaults(props: QueryRecord, block?: QueryRecord): Record<string, QueryValue>;
export declare function serialize(params: Readonly<Record<string, QueryValue>>): string;
export declare function socketConfig({ roomId, deviceId, identity, compress, socketHost, appLanguage, }: SocketConfigOptions): SocketConfig;
export declare function socketQuery(config: SocketConfig, block?: QueryRecord): string;
export declare function socketUrl(config: SocketConfig, block?: QueryRecord): string;
export declare function pushFrame(payloadType: string, payload: string | ArrayBuffer | ArrayBufferView, { logId }?: {
    logId?: bigint;
}): Buffer;
export declare function enterRoomFrame({ roomId, identity, liveId, }: {
    roomId: string;
    identity?: Identity;
    liveId?: string;
}): Buffer;
export declare function heartbeatFrame(roomId: string): Buffer;
export {};
//# sourceMappingURL=player.d.ts.map