import React from 'react'
import { Trans } from '@xy-form/ui-schema/Translate'
import { isRootSchema, SchemaRootContext, SchemaRootProvider, useSchemaRoot } from '@xy-form/ui-schema/SchemaRootProvider'
import { useSchemaRef } from '@xy-form/ui-schema/Plugins/ReferencingHandler'
import { NextPluginRendererMemo, PluginProps } from '@xy-form/ui-schema/PluginStack'
import { getSchemaId } from '@xy-form/ui-schema/Utils/getSchema'

export const ReferencingHandler = <P extends PluginProps & { rootContext?: { [k: string]: any } }>({rootContext, ...props}: P): React.ReactElement => {
    const {schema: baseSchema, isVirtual} = props
    const {schema: maybeRootSchema, definitions: maybeDefinitions, ...nestedRootProps} = useSchemaRoot()
    const isRoot = Boolean(isRootSchema(baseSchema) || rootContext || baseSchema.get('definitions') || baseSchema.get('$defs'))
    const definitions = (isRoot ? baseSchema.get('definitions') || baseSchema.get('$defs') : maybeDefinitions) as SchemaRootContext['definitions']
    const {schema, refsPending} = useSchemaRef(
        maybeRootSchema, definitions, isRoot, baseSchema,
    )

    return (
        refsPending && refsPending.size > 0 ?
            isVirtual ? null : <Trans text={'labels.loading'} fallback={'Loading'}/> :
            isRoot ?
                <SchemaRootProvider {...nestedRootProps} {...(rootContext || {})} id={getSchemaId(schema)} schema={schema} definitions={definitions}>
                    <NextPluginRendererMemo {...props} schema={schema}/>
                </SchemaRootProvider> :
                <NextPluginRendererMemo {...props} schema={schema}/>
    ) as unknown as React.ReactElement
}
