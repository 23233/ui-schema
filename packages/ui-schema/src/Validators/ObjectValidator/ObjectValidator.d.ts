import { Errors, StoreSchemaType } from '@xy-form/ui-schema/CommonTypings'
import { PluginSimple } from '@xy-form/ui-schema/PluginSimpleStack/PluginSimple'
import { PluginProps } from '@xy-form/ui-schema/PluginStack/Plugin'
import { ValidatorErrorsType } from '@xy-form/ui-schema/ValidatorErrors'

export const ERROR_ADDITIONAL_PROPERTIES = 'additional-properties'

export function validateObject(schema: StoreSchemaType, value: any, recursively?: boolean): ValidatorErrorsType

export interface ObjectValidatorType extends PluginSimple {
    handle: (
        {schema, value, errors, valid}: Partial<PluginProps>
    ) => {
        errors: Errors
        valid: boolean
    }
}

export const objectValidator: ObjectValidatorType
