import { translation, Translator, TranslatorContext } from '@xy-form/ui-schema/Translate/makeTranslator'
import { StoreSchemaType } from '@xy-form/ui-schema/CommonTypings'

/**
 * for handling relative schema translation
 * @param schema
 * @param context
 * @param locale
 */
export function relT(
    schema?: StoreSchemaType,
    context?: TranslatorContext,
    locale?: string
): translation | undefined

/**
 * as translator, using `relT` internally
 */
export const relTranslator: Translator
