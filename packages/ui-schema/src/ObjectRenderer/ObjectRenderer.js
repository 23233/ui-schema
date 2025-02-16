import React from 'react';
import {memo} from '@xy-form/ui-schema/Utils/memo';
import {PluginStack} from '@xy-form/ui-schema/PluginStack';

const ObjectRendererBase = (
    {
        level, schema, storeKeys, schemaKeys,
        // for performance reasons, not pushing errors deeper
        // eslint-disable-next-line no-unused-vars
        errors,
        ...props
    },
) => {
    const {isVirtual, widgets} = props
    const properties = schema.get('properties');

    if(!isVirtual && !widgets.GroupRenderer) {
        if(process.env.NODE_ENV === 'development') {
            console.error('Widget GroupRenderer not existing');
        }
        return null;
    }
    const GroupRenderer = widgets.GroupRenderer;

    const propertyTree = properties?.map((childSchema, childKey) =>
        <PluginStack
            key={childKey}
            {...props}
            schema={childSchema} parentSchema={schema}
            storeKeys={storeKeys.push(childKey)}
            schemaKeys={schemaKeys?.push('properties').push(childKey)}
            level={level + 1}
        />,
    ).valueSeq() || null

    // no-properties could come from
    //   e.g. combining/conditional schemas which are currently not applied (e.g. a condition fails)
    return isVirtual ? propertyTree :
        properties ?
            <GroupRenderer
                storeKeys={storeKeys} schemaKeys={schemaKeys}
                level={level} noGrid={props.noGrid}
                schema={schema}
            >
                {propertyTree}
            </GroupRenderer> : null
};
export const ObjectRenderer = memo(ObjectRendererBase);
