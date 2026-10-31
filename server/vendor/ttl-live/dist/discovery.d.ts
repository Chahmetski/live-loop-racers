import type { Gift, LiveRoom, RoomInfo, RoomLookup } from './types.js';
export declare const ROOM_STATUS_LIVE = 2;
export declare const roomLookupUrl: (uniqueId: string) => string;
export declare const roomInfoUrl: (roomId: string) => string;
export declare const giftListUrl: (roomId: string) => string;
export declare function liveSearchUrl(keyword?: string, offset?: number): string;
export declare class WebcastRefusal extends Error {
    readonly statusCode: number;
    constructor(statusCode: number, message?: string);
}
export declare function parseId(value: unknown): string;
export declare class Discovery {
    #private;
    cookie: string;
    readonly userAgent: string;
    readonly timeoutMs: number;
    constructor({ cookie, userAgent, timeoutMs }?: DiscoveryOptions);
    setCookie(cookie: string): void;
    roomLookup(uniqueId: string): Promise<RoomLookup>;
    roomInfo(roomId: string): Promise<RoomInfo>;
    giftList(roomId: string): Promise<Map<string, Gift>>;
    liveChannels(keyword?: string): Promise<LiveRoom[]>;
}
export interface DiscoveryOptions {
    cookie?: string;
    userAgent?: string;
    timeoutMs?: number;
}
//# sourceMappingURL=discovery.d.ts.map