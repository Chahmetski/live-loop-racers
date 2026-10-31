export type BaseEvent = {
    method: string;
    msgId?: string;
    isHistory?: boolean;
};
export declare const BaseEventSchema: {
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
};
//# sourceMappingURL=base-event.d.ts.map