import { PluginSimple } from "@xy-form/ui-schema/PluginSimpleStack/PluginSimple"
import { PluginProps } from "@xy-form/ui-schema/PluginStack/Plugin"
import { Errors, SchemaTypesType } from '@xy-form/ui-schema/CommonTypings'

export const ERROR_WRONG_TYPE = 'wrong-type'

export function validateType(value: any, type: SchemaTypesType): boolean

export interface TypeValidatorType extends PluginSimple {
    handle: (
        {schema, value, errors, valid}: Partial<PluginProps>
    ) => {
        errors: Errors
        valid: boolean
    }
}

export const typeValidator: TypeValidatorType
