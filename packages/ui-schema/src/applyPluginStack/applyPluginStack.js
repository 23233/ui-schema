import React from 'react'
import {PluginStack} from '@xy-form/ui-schema/PluginStack'
import {getDisplayName, memo} from '@xy-form/ui-schema/Utils/memo'

export function applyPluginStack(CustomWidget) {
    const CustomStack = (p) =>
        <PluginStack
            {...p}
            WidgetOverride={CustomWidget}
        />

    CustomStack.displayName = `ApplyPluginStack(${getDisplayName(CustomWidget)})`
    return memo(CustomStack)
}

export function injectPluginStack(Wrapper, CustomWidget) {
    const CustomStack = (p) =>
        <PluginStack
            {...p}
            StackWrapper={Wrapper}
            WidgetOverride={CustomWidget}
        />

    CustomStack.displayName = `InjectPluginStack(${getDisplayName(Wrapper)}${CustomWidget ? `(${getDisplayName(CustomWidget)})` : ''})`
    return memo(CustomStack)
}
