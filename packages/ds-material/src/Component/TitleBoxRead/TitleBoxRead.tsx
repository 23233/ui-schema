import Typography from '@mui/material/Typography'
import { Errors, StoreKeys, StoreSchemaType, TransTitle } from '@xy-form/ui-schema'
import Box from '@mui/material/Box'
import React from 'react'
import { InfoRendererProps } from '@xy-form/ds-material'

export interface TitleBoxReadProps {
    hideTitle?: boolean
    hasInfo?: boolean
    schema: StoreSchemaType
    storeKeys: StoreKeys
    valid?: boolean
    errors?: Errors
    InfoRenderer?: React.ComponentType<InfoRendererProps>
}

export const TitleBoxRead: React.ComponentType<TitleBoxReadProps> = (
    {
        schema, storeKeys,
        errors, valid,
        hideTitle,
        hasInfo,
        InfoRenderer,
    },
) => {
    return <Box style={{display: 'flex', opacity: 0.75}}>
        {hideTitle ? null :
            <Typography
                variant={'caption'}
                color={!valid ? 'error' : 'textSecondary'}
            >
                <TransTitle schema={schema} storeKeys={storeKeys}/>
            </Typography>}
        {hasInfo ? <Box>
            {InfoRenderer && schema?.get('info') ?
                <InfoRenderer
                    schema={schema} variant={'icon'} openAs={'modal'}
                    storeKeys={storeKeys} valid={valid} errors={errors}
                /> : null}
        </Box> : null}
    </Box>
}
