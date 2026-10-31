export type LiveRoom = {
    uniqueId: string;
    roomId: string;
    nickname: string;
    title: string;
    viewers: number;
};
export declare const LiveRoomSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/live-room.schema.json";
    readonly title: "ttl-live Live Room";
    readonly "x-typescript-name": "LiveRoom";
    readonly type: "object";
    readonly properties: {
        readonly uniqueId: {
            readonly type: "string";
        };
        readonly roomId: {
            readonly type: "string";
            readonly pattern: "^[0-9]+$";
        };
        readonly nickname: {
            readonly type: "string";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly viewers: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
    };
    readonly required: readonly ["uniqueId", "roomId", "nickname", "title", "viewers"];
    readonly additionalProperties: false;
};
//# sourceMappingURL=live-room.d.ts.map