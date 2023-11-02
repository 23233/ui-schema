import React from 'react'
import { translation, TranslatorContext } from '@xy-form/ui-schema/Translate/makeTranslator'
import { StoreSchemaType } from '@xy-form/ui-schema/CommonTypings'

export interface TransProps {
    text: string
    context?: TranslatorContext
    schema?: StoreSchemaType
    fallback?: translation
}

/**
 * Translation component, supports dot strings, dictionary can be mixed strings, string functions and function components as translation
 */
export function Trans<P extends TransProps>(props: P): React.ReactElement
