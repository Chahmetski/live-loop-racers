export type RoomInfo = {
    roomId: string;
    title: string;
    status: number;
    viewers: number;
    likes: number;
    comments: number;
    shares: number;
    follows: number;
    coverUrl: string;
    shareUrl: string;
    owner: {
        userId: string;
        uniqueId: string;
        nickname: string;
        secUid: string;
        avatarUrl: string;
        followerCount: number;
    };
};
export declare const RoomInfoSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/room-info.schema.json";
    readonly title: "ttl-live Room Info";
    readonly "x-typescript-name": "RoomInfo";
    readonly type: "object";
    readonly properties: {
        readonly roomId: {
            readonly type: "string";
            readonly pattern: "^[0-9]+$";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly status: {
            readonly type: "integer";
        };
        readonly viewers: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
        readonly likes: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
        readonly comments: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
        readonly shares: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
        readonly follows: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
        readonly coverUrl: {
            readonly type: "string";
            readonly format: "uri";
        };
        readonly shareUrl: {
            readonly type: "string";
            readonly format: "uri";
        };
        readonly owner: {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema";
            readonly $id: "https://ttl-live.dev/schema/public/room-owner.schema.json";
            readonly title: "ttl-live Room Owner";
            readonly "x-typescript-name": "RoomOwner";
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly pattern: "^[0-9]*$";
                };
                readonly uniqueId: {
                    readonly type: "string";
                };
                readonly nickname: {
                    readonly type: "string";
                };
                readonly secUid: {
                    readonly type: "string";
                };
                readonly avatarUrl: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly followerCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 9007199254740991;
                };
            };
            readonly required: readonly ["userId", "uniqueId", "nickname", "secUid", "avatarUrl", "followerCount"];
            readonly additionalProperties: false;
        };
    };
    readonly required: readonly ["roomId", "title", "status", "viewers", "likes", "comments", "shares", "follows", "coverUrl", "shareUrl", "owner"];
    readonly additionalProperties: false;
};
//# sourceMappingURL=room-info.d.ts.map