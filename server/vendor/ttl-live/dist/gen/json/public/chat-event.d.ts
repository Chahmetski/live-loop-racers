export type ChatEvent = {
    method: string;
    msgId?: string;
    isHistory?: boolean;
} & {
    type: "chat";
    user: {
        userId: string;
        nickname: string;
        uniqueId: string;
        secUid: string;
        avatarUrl?: string;
        followStatus?: number;
    };
    comment: string;
};
export declare const ChatEventSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/chat-event.schema.json";
    readonly title: "ttl-live Chat Event";
    readonly "x-typescript-name": "ChatEvent";
    readonly allOf: readonly [{
        readonly $schema: "https://json-schema.org/draft/2020-12/schema";
        readonly $id: "https://ttl-live.dev/schema/public/base-event.schema.json";
        readonly title: "ttl-live Base Event";
        readonly "x-typescript-name": "BaseEvent";
        readonly type: "object";
        readonly properties: {
            readonly method: {
                readonly type: "string";
            };
            readonly msgId: {
                readonly type: "string";
                readonly pattern: "^[0-9]+$";
            };
            readonly isHistory: {
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["method"];
        readonly additionalProperties: true;
        readonly "x-typescript-no-index": true;
    }, {
        readonly type: "object";
        readonly properties: {
            readonly type: {
                readonly const: "chat";
            };
            readonly user: {
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
            readonly comment: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["type", "user", "comment"];
        readonly additionalProperties: true;
        readonly "x-typescript-no-index": true;
    }];
};
//# sourceMappingURL=chat-event.d.ts.map