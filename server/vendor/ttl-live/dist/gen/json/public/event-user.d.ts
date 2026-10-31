export type EventUser = {
    userId: string;
    nickname: string;
    uniqueId: string;
    secUid: string;
    avatarUrl?: string;
    followStatus?: number;
};
export declare const EventUserSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/event-user.schema.json";
    readonly title: "ttl-live Event User";
    readonly "x-typescript-name": "EventUser";
    readonly type: "object";
    readonly properties: {
        readonly userId: {
            readonly type: "string";
            readonly pattern: "^[0-9]+$";
        };
        readonly nickname: {
            readonly type: "string";
        };
        readonly uniqueId: {
            readonly type: "string";
        };
        readonly secUid: {
            readonly type: "string";
        };
        readonly avatarUrl: {
            readonly type: "string";
            readonly format: "uri";
        };
        readonly followStatus: {
            readonly type: "integer";
            readonly minimum: 0;
        };
    };
    readonly required: readonly ["userId", "nickname", "uniqueId", "secUid"];
    readonly additionalProperties: false;
};
//# sourceMappingURL=event-user.d.ts.map