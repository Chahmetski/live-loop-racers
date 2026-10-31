export type Gift = {
    id: string;
    name: string;
    describe: string;
    diamondCount: number;
    combo: boolean;
    giftType: number;
    iconUrl: string;
};
export declare const GiftSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/gift.schema.json";
    readonly title: "ttl-live Gift";
    readonly "x-typescript-name": "Gift";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly pattern: "^[0-9]+$";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly describe: {
            readonly type: "string";
        };
        readonly diamondCount: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
        readonly combo: {
            readonly type: "boolean";
        };
        readonly giftType: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 9007199254740991;
        };
        readonly iconUrl: {
            readonly type: "string";
            readonly format: "uri";
        };
    };
    readonly required: readonly ["id", "name", "describe", "diamondCount", "combo", "giftType", "iconUrl"];
    readonly additionalProperties: false;
};
//# sourceMappingURL=gift.d.ts.map