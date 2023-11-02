import { PluginSimple } from "@xy-form/ui-schema/PluginSimpleStack/PluginSimple"
import { PluginProps } from "@xy-form/ui-schema/PluginStack/Plugin"
import { Errors, StoreSchemaType } from '@xy-form/ui-schema/CommonTypings'

export const ERROR_MULTIPLE_OF: 'multiple-of'

export function validateMultipleOf(schema: StoreSchemaType, value: any): boolean

export interface MultipleOfValidatorType extends PluginSimple {
    handle: (
        {schema, value, errors, valid}: Partial<PluginProps>
    ) => {
        errors: Errors
        valid: boolean
    }
}

export const multipleOfValidator: MultipleOfValidatorType
