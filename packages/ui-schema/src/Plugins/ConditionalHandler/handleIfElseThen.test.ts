import { Map } from 'immutable'
import { createOrderedMap } from '@xy-form/ui-schema/Utils/createMap/createMap'
import { handleIfElseThen } from '@xy-form/ui-schema/Plugins/ConditionalHandler/handleIfElseThen'
import { StoreSchemaType } from '@xy-form/ui-schema/CommonTypings'

/**
 * npm test -- --testPathPattern=ConditionalHandler --watch --watchman --coverage=false
 * npm run tdd -- --testPathPattern=ConditionalHandler
 * npm run tdd -- --runTestsByPath=packages/ui-schema/src/Plugins/ConditionalHandler
 * npm run tdd -- --runTestsByPath "./packages/ui-schema/src/Plugins/ConditionalHandler"
 * npm run tdd -- --runTestsByPath "./packages/ui-schema/src/Plugins/ConditionalHandler/handleIfElseThen.test.ts" --selectProjects test-ui-schema
 * npm run test -- --runTestsByPath "./packages/ui-schema/src/Plugins/ConditionalHandler/handleIfElseThen.test.ts"
 * npm run test -- --runTestsByPath "./packages/ui-schema/src/Plugins/ConditionalHandler/handleIfElseThen.test.ts" --selectProjects test-ui-schema
 */
describe('handleIfElseThen', () => {
    test.each([
        [
            createOrderedMap({
                if: {
                    'properties': {
                        'country': {
                            'type': 'string',
                            'const': 'canada',
                        },
                    },
                },
                then: {
                    'properties': {
                        'region': {
                            'type': 'string',
                            'const': 'quebec',
                        },
                    },
                },
                else: {},
            }/* as JsonSchema*/),
            createOrderedMap({
                country: 'canada',
            }),
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                },
            }),// distSchema
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                    'region': {
                        'type': 'string',
                        'const': 'quebec',
                    },
                },
            }),// expectedSchema
            true,// expected
        ],
        [
            createOrderedMap({
                if: {
                    'properties': {
                        'country': {
                            'type': 'string',
                            'const': 'canada',
                        },
                    },
                },
                else: {
                    'properties': {
                        'region': {
                            'type': 'string',
                            'const': 'berlin',
                        },
                    },
                },
            }/* as JsonSchema*/),
            createOrderedMap({
                country: 'germany',
            }),
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                },
            }),// distSchema
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                    'region': {
                        'type': 'string',
                        'const': 'berlin',
                    },
                },
            }),// expectedSchema
            true,// expected
        ],
        [
            createOrderedMap({
                if: {
                    'properties': {
                        'country': {
                            'type': 'string',
                            'const': 'canada',
                        },
                    },
                },
                else: {
                    'properties': {
                        'region': {
                            'type': 'string',
                            'const': 'berlin',
                        },
                    },
                },
            }/* as JsonSchema*/),
            createOrderedMap({
                country: 'canada',
            }),
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                },
            }),// distSchema
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                },
            }),// expectedSchema
            true,// expected
        ],
        [
            createOrderedMap({
                if: {
                    'properties': {
                        'country': {
                            'type': 'string',
                            'const': 'canada',
                        },
                    },
                },
                then: {
                    'properties': {
                        'region': {
                            'type': 'string',
                            'const': 'quebec',
                        },
                    },
                },
            }/* as JsonSchema*/),
            createOrderedMap({
                country: 'canada',
            }),
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                },
            }),// distSchema
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                    region: {
                        type: 'string',
                    },
                },
            }),// expectedSchema
            false,// expected
        ],
        [
            createOrderedMap({}/* as JsonSchema*/),
            createOrderedMap({
                country: 'canada',
            }),
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                },
            }),// distSchema
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                    region: {
                        'type': 'string',
                        'const': 'quebec',
                    },
                },
            }),// expectedSchema
            false,// expected
        ],
        [
            createOrderedMap({
                if: {
                    'properties': {
                        'country': {
                            'type': 'string',
                            'const': 'canada',
                        },
                    },
                },
                then: {
                    'properties': {
                        'region': {
                            'type': 'string',
                            'const': 'quebec',
                        },
                    },
                },
                else: {
                    'properties': {
                        'region': {
                            'type': 'string',
                            'const': 'scottland',
                        },
                    },
                },
            }/* as JsonSchema*/),
            createOrderedMap({
                country: 'united-kingdom',
            }),
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                },
            }),// distSchema
            createOrderedMap({
                type: 'object',
                properties: {
                    country: {
                        type: 'string',
                    },
                    'region': {
                        'type': 'string',
                        'const': 'scottland',
                    },
                },
            }),// expectedSchema
            true,// expected
        ],
        [
            createOrderedMap({
                type: 'number',
                if: {
                    minimum: 10,
                },
                then: {
                    maximum: 40,
                },
                else: {
                    maximum: 8,
                },
            }/* as JsonSchema*/),
            12,
            createOrderedMap({
                type: 'number',
            }),// distSchema
            createOrderedMap({
                type: 'number',
                maximum: 40,
            }),// expectedSchema
            true,// expected
        ],
        [
            createOrderedMap({
                type: 'number',
                if: {
                    minimum: 10,
                },
                then: {
                    maximum: 40,
                },
                else: {
                    maximum: 8,
                },
            }/* as JsonSchema*/),
            6,
            createOrderedMap({
                type: 'number',
            }),// distSchema
            createOrderedMap({
                type: 'number',
                maximum: 8,
            }),// expectedSchema
            true,// expected
        ],
    ] as [StoreSchemaType, Map<string, string | number>, StoreSchemaType, StoreSchemaType, boolean][])(
        'handleIfElseThen(%j, store, distSchema)',
        (schema, store, distSchema, expectedSchema, expected) => {
            /*if(handleIfElseThen(schema, store, distSchema).equals(expectedSchema) !== expected) {
                console.log(handleIfElseThen(schema, store, distSchema).toJS())
            }*/
            expect(handleIfElseThen(schema, store, distSchema).equals(expectedSchema)).toBe(expected)
        }
    )
})
