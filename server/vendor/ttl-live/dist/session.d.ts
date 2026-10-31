export declare const USER_AGENT: string;
export declare const WINDOWS_USER_AGENT: string;
export declare const GUEST_BOOTSTRAP_URL = "https://www.tiktok.com/live";
export type GuestSessionErrorCode = 'BOOTSTRAP_NO_COOKIES' | 'RATE_LIMIT_OR_VERIFICATION' | 'WS_HANDSHAKE_REJECTED' | 'UNKNOWN';
export declare class GuestSessionError extends Error {
    readonly code: GuestSessionErrorCode;
    readonly status?: number;
    readonly closeCode?: number;
    constructor(code: GuestSessionErrorCode, message: string, status?: number, closeCode?: number);
}
export interface SessionIdentity {
    cookie: string;
    authenticated: boolean;
    deviceId?: string;
}
export interface GuestSessionOptions {
    userAgent?: string;
    url?: string;
    timeoutMs?: number;
    /** Number of additional attempts after a successful response without a usable `ttwid`. */
    retries?: number;
    /** Base delay between no-cookie retries. The implementation caps both count and delay. */
    retryDelayMs?: number;
}
export declare function sessionPath(): string;
export declare function parseCookies(raw: string): Map<string, string>;
export declare function sessionJar(): Map<string, string>;
export declare function bootstrapGuestSession({ userAgent, url, timeoutMs, retries: requestedRetries, retryDelayMs: requestedRetryDelayMs, }?: GuestSessionOptions): Promise<SessionIdentity>;
export declare function cookieHeader(jar: ReadonlyMap<string, string>, extra?: Readonly<Record<string, string>>): string;
interface CookieHeaders {
    getSetCookie?: () => string[];
}
interface CookieResponse {
    headers?: CookieHeaders;
}
export declare function absorbCookies(jar: Map<string, string>, response: CookieResponse): string[];
export {};
//# sourceMappingURL=session.d.ts.map