export type ReconnectPolicy = {
    attempts: number;
    initialMs: number;
    maxMs: number;
};
export declare const ReconnectPolicySchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/reconnect-policy.schema.json";
    readonly title: "ttl-live Reconnect Policy";
    readonly "x-typescript-name": "ReconnectPolicy";
    readonly type: "object";
    readonly properties: {
        readonly attempts: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
        readonly initialMs: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
        readonly maxMs: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
    };
    readonly required: readonly ["attempts", "initialMs", "maxMs"];
    readonly additionalProperties: false;
};
//# sourceMappingURL=reconnect-policy.d.ts.map