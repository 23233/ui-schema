import React from 'react'
import { WidgetProps } from '@xy-form/ui-schema/Widget'
import { WithScalarValue } from '@xy-form/ui-schema/UIStore'
import { UIStoreActionSet } from '@xy-form/ui-schema/UIStoreActions'
import { TransTitle } from '@xy-form/ui-schema/Translate/TransTitle'
import { MuiPickersAdapterContext } from '@mui/x-date-pickers/LocalizationProvider'
import TextField from '@mui/material/TextField'
import { BaseDatePickerProps } from '@mui/x-date-pickers/DatePicker/shared'
import { CalendarPickerView } from '@mui/x-date-pickers/internals/models'
import { List } from 'immutable'

export interface WidgetDatePickerProps<TDate, P extends BaseDatePickerProps<TDate> = BaseDatePickerProps<TDate>> {
    Picker: React.ComponentType<P>
    pickerProps?: any
}

export const WidgetDatePicker: React.FC<WidgetProps & WithScalarValue & WidgetDatePickerProps<any>> = (
    {
        value, storeKeys, onChange, schema, required,
        Picker,
        pickerProps,
    }
) => {
    const adapter = React.useContext(MuiPickersAdapterContext)
    const {utils} = adapter || {}
    const dateFormat = (schema.getIn(['date', 'format']) as string | undefined) || 'yyyy-MM-dd'
    const dateFormatData = schema.getIn(['date', 'formatData']) as string || dateFormat
    const dateValue = React.useMemo(
        () =>
            !utils || typeof value === 'undefined' ?
                null : utils.parse(value as string, dateFormatData),
        [value, utils, dateFormatData],
    )

    const viewsList = schema.getIn(['date', 'views'])
    const views = React.useMemo(
        () => List.isList(viewsList) ? viewsList.toArray() as CalendarPickerView[] : [],
        [viewsList],
    )

    const openTo = schema.getIn(['date', 'openTo']) as CalendarPickerView
    const orientation = schema.getIn(['date', 'orientation']) as 'landscape' | 'portrait' | undefined
    if (!views) {
        console.error('WidgetDatePicker invalid, requires `views` at: ', storeKeys.toJS())
    }

    return <Picker
        label={<TransTitle schema={schema} storeKeys={storeKeys}/>}
        value={dateValue}
        inputFormat={dateFormat}
        orientation={orientation}
        openTo={openTo}
        views={views}
        readOnly={schema.get('readOnly') as boolean}
        onChange={(e) => {
            if (!utils) return
            onChange({
                storeKeys: storeKeys,
                scopes: ['value'],
                type: 'set',
                schema,
                required,
                data: {value: e ? utils.formatByString(e, dateFormatData) : ''},
            } as UIStoreActionSet)
        }}
        renderInput={(params) => <TextField {...params} fullWidth/>}
        {...pickerProps || {}}
    />
}
