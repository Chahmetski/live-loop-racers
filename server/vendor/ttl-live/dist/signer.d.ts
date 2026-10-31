export declare const BOOTSTRAP_PATH: string;
export declare const BUNDLE_URL = "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/webmssdk/1.0.0.388/webmssdk.js";
export declare const BUNDLE_SHA256 = "dee22566273d398e074df6db40f39cfd827f6b8efd6fc382de03c44c501299ac";
export declare const PRODUCT: Readonly<{
    readonly fetch: "fetch";
    readonly frontier: "frontier";
    readonly ws: "ws";
}>;
export type Product = (typeof PRODUCT)[keyof typeof PRODUCT];
export interface LoadBundleOptions {
    url?: string;
    cachePath?: string;
    maxAgeMs?: number;
    expectedSha256?: string;
}
export interface SignerOptions {
    bundleSource?: string;
    bundlePath?: string;
    bundleUrl?: string;
    userAgent?: string;
    cookie?: string;
    storedToken?: string;
    pinned?: boolean;
}
export declare function loadBundle({ url, cachePath, maxAgeMs, expectedSha256, }?: LoadBundleOptions): Promise<string>;
export declare class Signer {
    #private;
    private constructor();
    static create({ bundleSource, bundlePath, bundleUrl, userAgent, cookie, storedToken, pinned, }?: SignerOptions): Promise<Signer>;
    sign(url: string, product?: Product): string;
}
//# sourceMappingURL=signer.d.ts.map