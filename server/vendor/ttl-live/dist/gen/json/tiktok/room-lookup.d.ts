export type TikTokRoomLookupResponse = {
    data?: {
        user?: {
            uniqueId?: string;
            roomId?: string;
            nickname?: string;
            status?: number;
            [key: string]: unknown;
        };
        liveRoom?: {
            status?: number;
            title?: string;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    };
    [key: string]: unknown;
};
export declare const TikTokRoomLookupResponseSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/tiktok/room-lookup.schema.json";
    readonly title: "TikTok Room Lookup Response";
    readonly "x-typescript-name": "TikTokRoomLookupResponse";
    readonly type: "object";
    readonly properties: {
        readonly data: {
            readonly type: "object";
            readonly properties: {
                readonly user: {
                    readonly type: "object";
                    readonly properties: {
                        readonly uniqueId: {
                            readonly type: "string";
                        };
                        readonly roomId: {
                            readonly type: "string";
                            readonly pattern: "^[0-9]*$";
                            readonly "x-expected": "numeric string";
                        };
                        readonly nickname: {
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly type: "integer";
                        };
                    };
                    readonly additionalProperties: true;
                };
                readonly liveRoom: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "integer";
                        };
                        readonly title: {
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: true;
                };
            };
            readonly additionalProperties: true;
        };
    };
    readonly additionalProperties: true;
};
//# sourceMappingURL=room-lookup.d.ts.map