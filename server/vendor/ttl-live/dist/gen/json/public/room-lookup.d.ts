export type RoomLookup = {
    uniqueId: string;
    roomId: string;
    nickname: string;
    status: number;
    title: string;
    isLive: boolean;
};
export declare const RoomLookupSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/room-lookup.schema.json";
    readonly title: "ttl-live Room Lookup";
    readonly "x-typescript-name": "RoomLookup";
    readonly type: "object";
    readonly properties: {
        readonly uniqueId: {
            readonly type: "string";
        };
        readonly roomId: {
            readonly type: "string";
            readonly pattern: "^[0-9]*$";
        };
        readonly nickname: {
            readonly type: "string";
        };
        readonly status: {
            readonly type: "integer";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly isLive: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["uniqueId", "roomId", "nickname", "status", "title", "isLive"];
    readonly additionalProperties: false;
};
//# sourceMappingURL=room-lookup.d.ts.map