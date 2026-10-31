export type TikTokRoomInfoResponse = {
    status_code: number;
    data?: {
        message?: string;
        id_str?: string;
        title?: string;
        status?: number;
        user_count?: number;
        cover?: {
            url_list?: Array<string>;
            [key: string]: unknown;
        };
        share_url?: string;
        owner?: {
            id_str?: string;
            display_id?: string;
            nickname?: string;
            sec_uid?: string;
            avatar_thumb?: {
                url_list?: Array<string>;
                [key: string]: unknown;
            };
            follow_info?: {
                follower_count?: number;
                [key: string]: unknown;
            };
            [key: string]: unknown;
        };
        stats?: {
            total_user?: number;
            like_count?: number;
            comment_count?: number;
            share_count?: number;
            follow_count?: number;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    };
    [key: string]: unknown;
};
export declare const TikTokRoomInfoResponseSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/tiktok/room-info.schema.json";
    readonly title: "TikTok Room Info Response";
    readonly "x-typescript-name": "TikTokRoomInfoResponse";
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
                readonly id_str: {
                    readonly type: "string";
                    readonly pattern: "^[0-9]+$";
                    readonly "x-expected": "numeric string";
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "integer";
                };
                readonly user_count: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 9007199254740991;
                    readonly "x-expected": "safe non-negative integer";
                };
                readonly cover: {
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
                readonly share_url: {
                    readonly type: "string";
                };
                readonly owner: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id_str: {
                            readonly type: "string";
                            readonly pattern: "^[0-9]+$";
                            readonly "x-expected": "numeric string";
                        };
                        readonly display_id: {
                            readonly type: "string";
                        };
                        readonly nickname: {
                            readonly type: "string";
                        };
                        readonly sec_uid: {
                            readonly type: "string";
                        };
                        readonly avatar_thumb: {
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
                        readonly follow_info: {
                            readonly type: "object";
                            readonly properties: {
                                readonly follower_count: {
                                    readonly type: "integer";
                                    readonly minimum: 0;
                                    readonly maximum: 9007199254740991;
                                    readonly "x-expected": "safe non-negative integer";
                                };
                            };
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: true;
                };
                readonly stats: {
                    readonly type: "object";
                    readonly properties: {
                        readonly total_user: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
                            readonly "x-expected": "safe non-negative integer";
                        };
                        readonly like_count: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
                            readonly "x-expected": "safe non-negative integer";
                        };
                        readonly comment_count: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
                            readonly "x-expected": "safe non-negative integer";
                        };
                        readonly share_count: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
                            readonly "x-expected": "safe non-negative integer";
                        };
                        readonly follow_count: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
                            readonly "x-expected": "safe non-negative integer";
                        };
                    };
                    readonly additionalProperties: true;
                };
            };
            readonly additionalProperties: true;
        };
    };
    readonly required: readonly ["status_code"];
    readonly additionalProperties: true;
};
//# sourceMappingURL=room-info.d.ts.map