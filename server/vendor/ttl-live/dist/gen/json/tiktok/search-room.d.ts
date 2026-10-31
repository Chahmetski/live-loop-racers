export type TikTokSearchRoom = {
    status?: number;
    id_str?: string;
    title?: string;
    user_count?: number;
    owner?: {
        display_id?: string;
        nickname?: string;
        [key: string]: unknown;
    };
    [key: string]: unknown;
};
export declare const TikTokSearchRoomSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/tiktok/search-room.schema.json";
    readonly title: "TikTok Live Search Room";
    readonly "x-typescript-name": "TikTokSearchRoom";
    readonly type: "object";
    readonly properties: {
        readonly status: {
            readonly type: "integer";
        };
        readonly id_str: {
            readonly type: "string";
            readonly pattern: "^[0-9]+$";
            readonly "x-expected": "numeric string";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly user_count: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
            readonly "x-expected": "safe non-negative integer";
        };
        readonly owner: {
            readonly type: "object";
            readonly properties: {
                readonly display_id: {
                    readonly type: "string";
                };
                readonly nickname: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: true;
        };
    };
    readonly additionalProperties: true;
};
//# sourceMappingURL=search-room.d.ts.map