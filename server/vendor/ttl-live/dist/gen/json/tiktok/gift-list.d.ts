export type TikTokGiftListResponse = {
    status_code: number;
    data?: {
        message?: string;
        gifts?: Array<{
            id: string | number;
            name?: string;
            describe?: string;
            diamond_count?: number;
            combo?: boolean;
            type?: number;
            icon?: {
                url_list?: Array<string>;
                [key: string]: unknown;
            };
            [key: string]: unknown;
        }>;
        [key: string]: unknown;
    };
    [key: string]: unknown;
};
export declare const TikTokGiftListResponseSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/tiktok/gift-list.schema.json";
    readonly title: "TikTok Gift List Response";
    readonly "x-typescript-name": "TikTokGiftListResponse";
    readonly type: "object";
    readonly properties: {
        readonly status_code: {
            readonly type: "integer";
        };
        readonly data: {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly gifts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                    readonly pattern: "^[0-9]+$";
                                    readonly "x-expected": "numeric string";
                                }, {
                                    readonly type: "integer";
                                    readonly minimum: 0;
                                    readonly maximum: 9007199254740991;
                                }];
                                readonly "x-expected": "numeric string or safe integer";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly describe: {
                                readonly type: "string";
                            };
                            readonly diamond_count: {
                                readonly type: "integer";
                                readonly minimum: 0;
                                readonly maximum: 9007199254740991;
                                readonly "x-expected": "safe non-negative integer";
                            };
                            readonly combo: {
                                readonly type: "boolean";
                            };
                            readonly type: {
                                readonly type: "integer";
                                readonly minimum: 0;
                                readonly maximum: 9007199254740991;
                                readonly "x-expected": "safe non-negative integer";
                            };
                            readonly icon: {
                                readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                                readonly $id: "https://ttl-live.dev/schema/tiktok/image.schema.json";
                                readonly title: "TikTok Image";
                                readonly "x-typescript-name": "TikTokImage";
                                readonly type: "object";
                                readonly properties: {
                                    readonly url_list: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                    };
                                };
                                readonly additionalProperties: true;
                            };
                        };
                        readonly required: readonly ["id"];
                        readonly additionalProperties: true;
                    };
                };
            };
            readonly additionalProperties: true;
        };
    };
    readonly required: readonly ["status_code"];
    readonly additionalProperties: true;
};
//# sourceMappingURL=gift-list.d.ts.map