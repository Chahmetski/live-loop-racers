export type TikTokImage = {
    url_list?: Array<string>;
    [key: string]: unknown;
};
export declare const TikTokImageSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/tiktok/image.schema.json";
    readonly title: "TikTok Image";
    readonly "x-typescript-name": "TikTokImage";
    readonly type: "object";
    readonly properties: {
        readonly url_list: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
                readonly format: "uri";
            };
        };
    };
    readonly additionalProperties: true;
};
//# sourceMappingURL=image.d.ts.map