export type RoomUserEvent = {
    method: string;
    msgId?: string;
    isHistory?: boolean;
} & {
    type: "roomUser";
    viewers: number;
    popularity: number;
    totalUser: number;
    anonymous: number;
    topViewers: Array<{
        rank: number;
        score: number;
        delta: number;
        user: {
            userId: string;
            nickname: string;
            uniqueId: string;
            secUid: string;
            avatarUrl?: string;
            followStatus?: number;
        };
    }>;
    rankedViewers: Array<{
        rank: number;
        score: number;
        delta: number;
        user: {
            userId: string;
            nickname: string;
            uniqueId: string;
            secUid: string;
            avatarUrl?: string;
            followStatus?: number;
        };
    }>;
};
export declare const RoomUserEventSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/room-user-event.schema.json";
    readonly title: "ttl-live Room User Event";
    readonly "x-typescript-name": "RoomUserEvent";
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
                readonly const: "roomUser";
            };
            readonly viewers: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly popularity: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly totalUser: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly anonymous: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly topViewers: {
                readonly type: "array";
                readonly items: {
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://ttl-live.dev/schema/public/top-viewer.schema.json";
                    readonly title: "ttl-live Top Viewer";
                    readonly "x-typescript-name": "TopViewer";
                    readonly type: "object";
                    readonly properties: {
                        readonly rank: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
                        };
                        readonly score: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
                        };
                        readonly delta: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
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
                    };
                    readonly required: readonly ["rank", "score", "delta", "user"];
                    readonly additionalProperties: false;
                };
            };
            readonly rankedViewers: {
                readonly type: "array";
                readonly items: {
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://ttl-live.dev/schema/public/top-viewer.schema.json";
                    readonly title: "ttl-live Top Viewer";
                    readonly "x-typescript-name": "TopViewer";
                    readonly type: "object";
                    readonly properties: {
                        readonly rank: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
                        };
                        readonly score: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
                        };
                        readonly delta: {
                            readonly type: "integer";
                            readonly minimum: 0;
                            readonly maximum: 9007199254740991;
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
                    };
                    readonly required: readonly ["rank", "score", "delta", "user"];
                    readonly additionalProperties: false;
                };
            };
        };
        readonly required: readonly ["type", "viewers", "popularity", "totalUser", "anonymous", "topViewers", "rankedViewers"];
        readonly additionalProperties: true;
        readonly "x-typescript-no-index": true;
    }];
};
//# sourceMappingURL=room-user-event.d.ts.map