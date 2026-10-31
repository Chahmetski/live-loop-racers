// Small dependency-free runtime validator for the JSON Schema subset used by this package.
// Generated schema constants are embedded in src/gen/json so validation keeps working from the
// published dist directory without relying on a working-directory-relative schema lookup.
export class JsonValidationError extends TypeError {
    endpoint;
    path;
    expected;
    received;
    constructor(endpoint, path, expected, received) {
        super(`Invalid ${endpoint}: ${path || '$'} expected ${expected}, received ${received}`);
        this.name = 'JsonValidationError';
        this.endpoint = endpoint;
        this.path = path;
        this.expected = expected;
        this.received = received;
    }
}
export function validateJson(value, schema, endpoint) {
    const failure = check(value, schema, '$');
    if (failure) {
        throw new JsonValidationError(endpoint, failure.path === '$' ? '$' : failure.path.slice(2), failure.expected, failure.received);
    }
    // This cast is after an independent runtime walk of the untrusted value.
    return value;
}
function check(value, schema, path, root = schema) {
    if (schema === true)
        return null;
    if (schema === false)
        return failure(path, 'a value allowed by the schema', value, schema);
    if (schema.$ref !== undefined) {
        const target = resolveLocalReference(root, schema.$ref);
        return check(value, target, path, root);
    }
    if (schema.const !== undefined && !Object.is(value, schema.const)) {
        return failure(path, `the constant ${JSON.stringify(schema.const)}`, value, schema);
    }
    if (schema.enum && !schema.enum.some((item) => Object.is(item, value))) {
        return failure(path, 'an allowed value', value, schema);
    }
    if (schema.format !== undefined && schema.format !== 'uri') {
        throw new TypeError(`Unsupported JSON Schema format: ${schema.format}`);
    }
    if (schema.allOf) {
        for (const branch of schema.allOf) {
            const result = check(value, branch, path, root);
            if (result)
                return result;
        }
    }
    if (schema.anyOf || schema.oneOf) {
        const branches = schema.anyOf ?? schema.oneOf ?? [];
        const matches = branches.filter((branch) => check(value, branch, path, root) === null).length;
        const valid = schema.anyOf ? matches > 0 : matches === 1;
        if (!valid)
            return failure(path, expected(schema), value, schema);
    }
    const types = Array.isArray(schema.type) ? schema.type : schema.type ? [schema.type] : [];
    if (types.length && !types.some((type) => matchesType(value, type))) {
        return failure(path, expected(schema), value, schema);
    }
    if (typeof value === 'string') {
        if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
            return failure(path, expected(schema), value, schema);
        }
        if (schema.format === 'uri' && !isUri(value)) {
            return failure(path, expected(schema), value, schema);
        }
    }
    if (typeof value === 'number') {
        if (schema.minimum !== undefined && value < schema.minimum) {
            return failure(path, expected(schema), value, schema);
        }
        if (schema.maximum !== undefined && value > schema.maximum) {
            return failure(path, expected(schema), value, schema);
        }
    }
    if (Array.isArray(value)) {
        if (schema.items) {
            for (let index = 0; index < value.length; index += 1) {
                const result = check(value[index], schema.items, `${path}[${index}]`, root);
                if (result)
                    return result;
            }
        }
        return null;
    }
    if (isRecord(value)) {
        for (const key of schema.required ?? []) {
            if (!Object.hasOwn(value, key)) {
                return failure(`${path}.${key}`, 'a required property', undefined, schema);
            }
        }
        for (const [key, propertySchema] of Object.entries(schema.properties ?? {})) {
            if (!Object.hasOwn(value, key))
                continue;
            const result = check(value[key], propertySchema, `${path}.${key}`, root);
            if (result)
                return result;
        }
        if (schema.additionalProperties === false) {
            const known = new Set(Object.keys(schema.properties ?? {}));
            for (const key of Object.keys(value)) {
                if (!known.has(key))
                    return failure(`${path}.${key}`, 'no additional property', value[key], schema);
            }
        }
        else if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
            const known = new Set(Object.keys(schema.properties ?? {}));
            for (const [key, child] of Object.entries(value)) {
                if (known.has(key))
                    continue;
                const result = check(child, schema.additionalProperties, `${path}.${key}`, root);
                if (result)
                    return result;
            }
        }
    }
    return null;
}
function matchesType(value, type) {
    switch (type) {
        case 'null': return value === null;
        case 'boolean': return typeof value === 'boolean';
        case 'integer': return typeof value === 'number' && Number.isInteger(value);
        case 'number': return typeof value === 'number' && Number.isFinite(value);
        case 'string': return typeof value === 'string';
        case 'array': return Array.isArray(value);
        case 'object': return isRecord(value);
        default: return true;
    }
}
function isRecord(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
function expected(schema) {
    if (schema === false)
        return 'a value allowed by the schema';
    if (schema === true)
        return 'any value';
    const label = schema['x-expected'];
    if (typeof label === 'string')
        return label;
    if (schema.pattern === '^[0-9]+$')
        return 'numeric string';
    if (schema.format === 'uri')
        return 'a valid URI';
    if (Array.isArray(schema.type))
        return schema.type.join(' or ');
    if (typeof schema.type === 'string')
        return schema.type;
    if (schema.anyOf)
        return 'one of the allowed shapes';
    return 'a valid value';
}
function isUri(value) {
    try {
        new URL(value);
        return true;
    }
    catch {
        return false;
    }
}
function received(value) {
    if (value === undefined)
        return 'undefined';
    if (value === null)
        return 'null';
    if (Array.isArray(value))
        return 'array';
    return typeof value;
}
function failure(path, expectedValue, value, schema) {
    return {
        path,
        expected: schema !== true && schema !== false && schema['x-expected'] && typeof schema['x-expected'] === 'string'
            ? schema['x-expected']
            : expectedValue,
        received: received(value),
    };
}
/** Resolve the local `$ref` form emitted by JSON Schema generators. */
function resolveLocalReference(root, reference) {
    if (reference === '#')
        return root;
    if (!reference.startsWith('#/')) {
        throw new TypeError(`Unsupported JSON Schema reference: ${reference}`);
    }
    let value = root;
    for (const segment of reference.slice(2).split('/')) {
        const key = segment.replaceAll('~1', '/').replaceAll('~0', '~');
        if (!value || typeof value !== 'object' || !(key in value)) {
            throw new TypeError(`JSON Schema reference does not exist: ${reference}`);
        }
        value = value[key];
    }
    if (value !== true && value !== false && (!value || typeof value !== 'object' || Array.isArray(value))) {
        throw new TypeError(`JSON Schema reference is not a schema: ${reference}`);
    }
    return value;
}
//# sourceMappingURL=json-validation.js.map