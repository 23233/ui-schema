import React from 'react'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import MuiFormGroup from '@mui/material/FormGroup'
import { useTheme } from '@mui/material/styles'
import { extractValue, WithValue } from '@xy-form/ui-schema/UIStore'
import { memo } from '@xy-form/ui-schema/Utils'
import { WidgetProps } from '@xy-form/ui-schema/Widget'
import { TransTitle } from '@xy-form/ui-schema/Translate/TransTitle'
import { MuiWidgetBinding } from '@xy-form/ds-material/widgetsBinding'

export const FormGroupBase: React.ComponentType<WidgetProps<MuiWidgetBinding> & WithValue> = (props) => {
    const {storeKeys, widgets} = props
    const {WidgetRenderer} = widgets
    const {spacing} = useTheme()
    let {schema} = props
    // deleting the `widget` to directly use `PluginStack` for nesting
    // with `widget` it would lead to an endless loop
    // using e.g. default `object` renderer then
    // @ts-ignore
    schema = schema.delete('widget')
    return <FormControl
        component="fieldset"
        style={{
            display: 'block',
            marginBottom: spacing(1),
        }}
    >
        <FormLabel component="legend">
            <TransTitle schema={schema} storeKeys={storeKeys}/>
        </FormLabel>
        <MuiFormGroup
            style={{
                marginTop: spacing(1),
                marginBottom: spacing(1),
            }}
        >
            <WidgetRenderer {...props} schema={schema}/>
        </MuiFormGroup>
        {/*<FormHelperText>Be careful</FormHelperText>*/}
    </FormControl>
}

export const FormGroup: React.ComponentType<WidgetProps<MuiWidgetBinding>> = extractValue(memo(FormGroupBase))
