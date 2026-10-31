export type RoomOwner = {
    userId: string;
    uniqueId: string;
    nickname: string;
    secUid: string;
    avatarUrl: string;
    followerCount: number;
};
export declare const RoomOwnerSchema: {
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
//# sourceMappingURL=room-owner.d.ts.map