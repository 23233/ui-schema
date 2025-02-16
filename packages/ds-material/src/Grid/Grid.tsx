import React from 'react'
import Grid, { GridSize } from '@mui/material/Grid'
import { StoreSchemaType } from '@xy-form/ui-schema/CommonTypings'
import { getNextPlugin, PluginProps } from '@xy-form/ui-schema/PluginStack'
import { OrderedMap } from 'immutable'
import { GroupRendererProps } from '@xy-form/ui-schema'
import { GridSpacing } from '@mui/material/Grid/Grid'

export const SchemaGridItem: React.ComponentType<React.PropsWithChildren<{
    schema: StoreSchemaType
    defaultMd?: GridSize
    style?: React.CSSProperties
    className?: string
    // todo: add correct typing for mui `classes`
    classes?: any
}>> = (
    {
        schema, children,
        defaultMd, style,
        className, classes,
    },
) => {
    const view = schema ? schema.get('view') as OrderedMap<string, GridSize> : undefined

    const viewXs = view ? (view.get('sizeXs') || 12) : 12
    const viewSm = view ? view.get('sizeSm') : undefined
    const viewMd = view ? view.get('sizeMd') : defaultMd as GridSize
    const viewLg = view ? view.get('sizeLg') : undefined
    const viewXl = view ? view.get('sizeXl') : undefined

    return <Grid
        item
        xs={viewXs}
        sm={viewSm}
        md={viewMd}
        lg={viewLg}
        xl={viewXl}
        style={style}
        className={className}
        classes={classes}
    >
        {children}
    </Grid>
}

export const RootRenderer: React.ComponentType<React.PropsWithChildren<{}>> =
    ({children}) => <Grid container spacing={0}>{children}</Grid>

export const GroupRenderer: React.ComponentType<React.PropsWithChildren<GroupRendererProps>> = (
    {
        schema, noGrid,
        spacing = 2, style, className,
        children,
    }
) =>
    noGrid ? children as React.ReactElement :
        <Grid
            container wrap={'wrap'}
            spacing={typeof schema.getIn(['view', 'spacing']) === 'number' ? schema.getIn(['view', 'spacing']) as GridSpacing : spacing as GridSpacing}
            style={style}
            className={className}
        >
            {children}
        </Grid>

export const SchemaGridHandler: React.ComponentType<PluginProps> = (props) => {
    const {schema, noGrid: noGridProp, isVirtual, currentPluginIndex} = props
    const next = currentPluginIndex + 1
    const Plugin = getNextPlugin(next, props.widgets)

    const align = schema.getIn(['view', 'align'])
    const style: React.CSSProperties = React.useMemo(() => ({
        textAlign: align as React.CSSProperties['textAlign'],
    }), [align])

    const noGrid = (noGridProp || isVirtual || schema.getIn(['view', 'noGrid']))
    const nestedNext = <Plugin {...props} currentPluginIndex={next}/>

    return noGrid ? nestedNext :
        <SchemaGridItem schema={schema} style={style}>
            {nestedNext}
        </SchemaGridItem>
}

