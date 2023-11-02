import { PluginSimple } from "@xy-form/ui-schema/PluginSimpleStack/PluginSimple"
import { PluginProps } from "@xy-form/ui-schema/PluginStack/Plugin"
import { Errors, SchemaTypesType } from '@xy-form/ui-schema/CommonTypings'

export const ERROR_PATTERN = 'pattern-not-matching'

export function validatePattern(type: SchemaTypesType, value?: any, pattern?: string): boolean

export interface PatternValidatorType extends PluginSimple {
    handle: (
        {schema, value, errors, valid}: Partial<PluginProps>
    ) => {
        errors: Errors
        valid: boolean
    }
}

export const patternValidator: PatternValidatorType
