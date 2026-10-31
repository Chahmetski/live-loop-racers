export type TikTokLiveSearchResponse = {
    status_code?: number;
    status_msg?: string;
    data?: Array<{
        live_info?: {
            raw_data?: string;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    }>;
    [key: string]: unknown;
};
export declare const TikTokLiveSearchResponseSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/tiktok/live-search.schema.json";
    readonly title: "TikTok Live Search Response";
    readonly "x-typescript-name": "TikTokLiveSearchResponse";
    readonly type: "object";
    readonly properties: {
        readonly status_code: {
            readonly type: "integer";
        };
        readonly status_msg: {
            readonly type: "string";
        };
        readonly data: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly live_info: {
                        readonly type: "object";
                        readonly properties: {
                            readonly raw_data: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: true;
                    };
                };
                readonly additionalProperties: true;
            };
        };
    };
    readonly additionalProperties: true;
};
//# sourceMappingURL=live-search.d.ts.map