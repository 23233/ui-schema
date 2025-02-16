import React from 'react'
import Box from '@mui/material/Box'
import IcYes from '@mui/icons-material/CheckCircle'
import IcNo from '@mui/icons-material/CancelOutlined'
import Typography from '@mui/material/Typography'
import { ValidityHelperText } from '@xy-form/ds-material/Component/LocaleHelperText'
import { WidgetProps, WithScalarValue } from '@xy-form/ui-schema'
import { MuiWidgetBinding } from '@xy-form/ds-material/widgetsBinding'
import { UIMetaReadContextType } from '@xy-form/ui-schema/UIMetaReadContext'
import { TitleBoxRead } from '@xy-form/ds-material/Component/TitleBoxRead'

export interface WidgetBooleanReadProps {
    style?: React.CSSProperties
    IconYes?: React.ComponentType<{ fontSize?: 'default' | 'inherit' | 'large' | 'medium' | 'small' }>
    IconNo?: React.ComponentType<{ fontSize?: 'default' | 'inherit' | 'large' | 'medium' | 'small' }>
}

export const WidgetBooleanRead = <P extends WidgetProps<MuiWidgetBinding> & UIMetaReadContextType = WidgetProps<MuiWidgetBinding> & UIMetaReadContextType>(
    {
        storeKeys, schema, value,
        showValidity, valid, errors,
        style,
        widgets,
        IconYes, IconNo,
        readDense,
    }: P & WithScalarValue & WidgetBooleanReadProps,
): React.ReactElement => {
    const hideTitle = Boolean(schema.getIn(['view', 'hideTitle']))
    const InfoRenderer = widgets?.InfoRenderer
    const hasInfo = Boolean(InfoRenderer && schema?.get('info'))
    return <>
        <Box style={style}>
            <TitleBoxRead
                hideTitle={hideTitle}
                hasInfo={hasInfo}
                InfoRenderer={InfoRenderer}
                valid={valid}
                errors={errors}
                storeKeys={storeKeys}
                schema={schema}
            />

            <Typography variant={readDense ? 'body2' : 'body1'}>
                {value ?
                    IconYes ? <IconYes fontSize={'small'}/> : <IcYes fontSize={'small'}/> :
                    IconNo ? <IconNo fontSize={'small'}/> : <IcNo fontSize={'small'}/>}
            </Typography>

            <ValidityHelperText
                errors={errors} showValidity={showValidity} schema={schema}
            />
        </Box>
    </>
}
