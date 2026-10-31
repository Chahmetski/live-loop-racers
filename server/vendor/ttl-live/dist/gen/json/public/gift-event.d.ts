export type GiftEvent = {
    method: string;
    msgId?: string;
    isHistory?: boolean;
} & {
    type: "gift";
    user: {
        userId: string;
        nickname: string;
        uniqueId: string;
        secUid: string;
        avatarUrl?: string;
        followStatus?: number;
    };
    toUser: {
        userId: string;
        nickname: string;
        uniqueId: string;
        secUid: string;
        avatarUrl?: string;
        followStatus?: number;
    };
    giftId: string;
    giftName: string;
    diamondCount: number;
    repeatCount: number;
    comboCount: number;
    groupId: string;
    repeatEnd: boolean;
    streakable?: boolean;
    giftIconUrl?: string;
};
export declare const GiftEventSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/gift-event.schema.json";
    readonly title: "ttl-live Gift Event";
    readonly "x-typescript-name": "GiftEvent";
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
                readonly const: "gift";
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
            readonly toUser: {
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
            readonly giftId: {
                readonly type: "string";
                readonly pattern: "^[0-9]+$";
            };
            readonly giftName: {
                readonly type: "string";
            };
            readonly diamondCount: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly repeatCount: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly comboCount: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly groupId: {
                readonly type: "string";
                readonly pattern: "^[0-9]+$";
            };
            readonly repeatEnd: {
                readonly type: "boolean";
            };
            readonly streakable: {
                readonly type: "boolean";
            };
            readonly giftIconUrl: {
                readonly type: "string";
                readonly format: "uri";
            };
        };
        readonly required: readonly ["type", "user", "toUser", "giftId", "giftName", "diamondCount", "repeatCount", "comboCount", "groupId", "repeatEnd"];
        readonly additionalProperties: true;
        readonly "x-typescript-no-index": true;
    }];
};
//# sourceMappingURL=gift-event.d.ts.map