import { PluginSimple } from '@xy-form/ui-schema/PluginSimpleStack/PluginSimple'
import { PluginProps } from '@xy-form/ui-schema/PluginStack/Plugin'
import { Errors, StoreSchemaType } from '@xy-form/ui-schema/CommonTypings'

export const ERROR_MAX_LENGTH: 'min-length'
export const ERROR_MIN_LENGTH: 'max-length'

export function validateMinMax(schema: StoreSchemaType, value: any): Errors

export interface MinMaxValidatorType extends PluginSimple {
    handle: (
        {schema, value, errors, valid}: Partial<PluginProps>
    ) => {
        errors: Errors
        valid: boolean
    }
}

export const minMaxValidator: MinMaxValidatorType
