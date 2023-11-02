import React from 'react'
import { extractValue, memo, WidgetProps, WithValue } from '@xy-form/ui-schema'
import { SlateRenderer } from '@xy-form/material-slate/Slate/SlateRenderer'
import { FormWrapper, useFormEditorStyles } from '@xy-form/material-slate/EditorWrapper/FormWrapper'
import { useSlate } from '@xy-form/material-slate/Slate/useSlate'
import { slatePlugins, withPlugins } from '@xy-form/material-slate/Slate/slatePlugins'
import { ElementMapperInline } from '@xy-form/material-slate/SlateElements/ElementMapperInline'

const RichContentInlineBase: React.ComponentType<WidgetProps & WithValue> = (props) => {
    const {
        /*internalValue,*/ value, schema, storeKeys,
        errors,
        showValidity,
        valid,
    } = props

    const {dense, focused, empty, onFocus, onBlur} = useSlate(schema, value)

    const classes = useFormEditorStyles({dense: dense as boolean, focused})

    return <FormWrapper
        storeKeys={storeKeys} schema={schema}
        dense={dense as boolean} focused={focused} empty={empty}
        errors={errors} showValidity={showValidity} valid={valid}
        classes={classes}
    >
        <SlateRenderer
            {...props}
            ElementMapper={ElementMapperInline} plugins={slatePlugins} onlyInline
            withPlugins={withPlugins}
            onFocus={onFocus} onBlur={onBlur}
        />
    </FormWrapper>
}

export const RichContentInline = extractValue(memo(RichContentInlineBase)) as React.ComponentType<WidgetProps>
