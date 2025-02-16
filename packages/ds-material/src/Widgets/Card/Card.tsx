import React from 'react'
import { TransTitle, WidgetProps } from '@xy-form/ui-schema'
import { ObjectRenderer } from '@xy-form/ui-schema/ObjectRenderer'
import Card, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography, { TypographyProps } from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const CardRenderer = (props: WidgetProps): React.ReactElement => {
    const {schema, storeKeys} = props

    return <Card
        elevation={schema.getIn(['view', 'ev']) as CardProps['elevation']}
        variant={schema.getIn(['view', 'variant']) as CardProps['variant']}
        style={schema.getIn(['view', 'bg']) === false ? {background: 'transparent'} : undefined}
    >
        <CardContent>
            {schema.getIn(['view', 'hideTitle']) ? null :
                <Typography
                    variant={(schema.getIn(['view', 'titleVariant']) || 'h5') as TypographyProps['variant']}
                    component={(schema.getIn(['view', 'titleComp']) || 'p') as React.ElementType}
                    gutterBottom
                >
                    <TransTitle schema={schema} storeKeys={storeKeys}/>
                </Typography>}
            {/* todo: add `description` support */}
            <Box py={1}>
                <ObjectRenderer {...props}/>
            </Box>
        </CardContent>
    </Card>
}
