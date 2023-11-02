import { requiredValidator } from '@xy-form/ui-schema/Validators/RequiredValidator'
import { minMaxValidator } from '@xy-form/ui-schema/Validators/MinMaxValidator'
import { typeValidator } from '@xy-form/ui-schema/Validators/TypeValidator'
import { multipleOfValidator } from '@xy-form/ui-schema/Validators/MultipleOfValidator'
import { valueValidatorConst, valueValidatorEnum } from '@xy-form/ui-schema/Validators/ValueValidator'
import { patternValidator } from '@xy-form/ui-schema/Validators/PatternValidator'
import { arrayValidator } from '@xy-form/ui-schema/Validators/ArrayValidator'
import { objectValidator } from '@xy-form/ui-schema/Validators/ObjectValidator'
import { oneOfValidator } from '@xy-form/ui-schema/Validators/OneOfValidator'
import { PluginSimple } from '@xy-form/ui-schema/PluginSimpleStack'

export const validators: PluginSimple[] = [
    requiredValidator,
    minMaxValidator,
    typeValidator,
    multipleOfValidator,
    valueValidatorConst,
    valueValidatorEnum,
    patternValidator,
    arrayValidator,
    objectValidator,
    oneOfValidator,
]
