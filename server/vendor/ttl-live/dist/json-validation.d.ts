export type JsonSchema = true | false | JsonSchemaObject;
export interface JsonSchemaObject {
    readonly type?: string | readonly string[];
    readonly properties?: Readonly<Record<string, JsonSchema>>;
    readonly required?: readonly string[];
    readonly items?: JsonSchema;
    readonly additionalProperties?: boolean | JsonSchema;
    readonly anyOf?: readonly JsonSchema[];
    readonly oneOf?: readonly JsonSchema[];
    readonly allOf?: readonly JsonSchema[];
    readonly pattern?: string;
    readonly minimum?: number;
    readonly maximum?: number;
    readonly const?: unknown;
    readonly enum?: readonly unknown[];
    readonly format?: string;
    readonly $comment?: string;
    readonly $defs?: Readonly<Record<string, JsonSchema>>;
    readonly $id?: string;
    readonly $ref?: string;
    readonly $schema?: string;
    readonly default?: unknown;
    readonly deprecated?: boolean;
    readonly description?: string;
    readonly examples?: readonly unknown[];
    readonly readOnly?: boolean;
    readonly title?: string;
    readonly writeOnly?: boolean;
    readonly 'x-expected'?: string;
    readonly 'x-typescript-name'?: string;
    readonly 'x-typescript-no-index'?: boolean;
    readonly 'x-typescript-type'?: string;
}
export declare class JsonValidationError extends TypeError {
    readonly endpoint: string;
    readonly path: string;
    readonly expected: string;
    readonly received: string;
    constructor(endpoint: string, path: string, expected: string, received: string);
}
export declare function validateJson<T>(value: unknown, schema: JsonSchema, endpoint: string): T;
//# sourceMappingURL=json-validation.d.ts.map