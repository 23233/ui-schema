import React from 'react'
import { beautifyKey, extractValue, memo, StoreSchemaType, Trans, tt, WidgetProps, WithValue } from '@xy-form/ui-schema'
import { ValidityHelperText } from '@xy-form/ds-material/Component/LocaleHelperText'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import { MuiWidgetBinding } from '@xy-form/ds-material/widgetsBinding'
import { List, Map, OrderedMap } from 'immutable'
import { TitleBoxRead } from '@xy-form/ds-material/Component/TitleBoxRead'
import { UIMetaReadContextType } from '@xy-form/ui-schema/UIMetaReadContext'
import Typography from '@mui/material/Typography'

export const WidgetChipsReadBase: React.ComponentType<WidgetProps<MuiWidgetBinding> & UIMetaReadContextType & WithValue> = (
    {
        storeKeys, schema, value,
        showValidity, errors,
        valid, widgets,
        readDense,
    },
) => {
    if(!schema) return null

    const oneOfVal = schema.getIn(['items', 'oneOf'])
    if(!oneOfVal) return null

    const hideTitle = schema.getIn(['view', 'hideTitle']) as boolean | undefined
    const InfoRenderer = widgets?.InfoRenderer
    const hasInfo = Boolean(InfoRenderer && schema?.get('info')) as boolean | undefined

    const currentValue = (typeof value !== 'undefined' ? value : (List(schema.get('default') as string[]) || List())) as List<string>
    const oneOfValues = (oneOfVal as List<OrderedMap<string, any>>).filter(v => currentValue?.indexOf(v.get('const') as string) !== -1)
    return <Box>
        <TitleBoxRead
            hideTitle={hideTitle}
            hasInfo={hasInfo}
            InfoRenderer={InfoRenderer}
            valid={valid}
            errors={errors}
            storeKeys={storeKeys}
            schema={schema}
        />

        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
            {oneOfValues?.size ?
                oneOfValues.map((oneOfSchema) =>
                    <Chip
                        key={oneOfSchema.get('const')}
                        label={<Trans
                            schema={oneOfSchema.get('t') as unknown as StoreSchemaType}
                            text={oneOfSchema.get('title') as string || oneOfSchema.get('const') as string}
                            context={Map({'relative': List(['title'])})}
                            fallback={oneOfSchema.get('title') || beautifyKey(oneOfSchema.get('const') as string | number, oneOfSchema.get('tt') as tt)}
                        />}
                        style={{marginRight: 4, marginBottom: readDense ? 2 : 4}}
                        size={!readDense && schema.getIn(['view', 'size']) === 'medium' ? 'medium' : 'small'}
                        variant={'filled'}
                        color={'primary'}
                    />
                ).valueSeq() :
                <Typography variant={readDense ? 'body2' : 'body1'} style={{opacity: 0.65}}>-</Typography>
            }
        </Box>

        <ValidityHelperText errors={errors} showValidity={showValidity} schema={schema}/>
    </Box>
}

export const WidgetChipsRead = extractValue(memo(WidgetChipsReadBase)) as React.ComponentType<WidgetProps<MuiWidgetBinding>>
