import React from 'react'
import { extractValue } from '@xy-form/ui-schema/UIStore'
import { NextPluginRendererMemo, PluginProps } from '@xy-form/ui-schema/PluginStack'

export const ExtractStorePlugin: React.ComponentType<PluginProps> = extractValue(NextPluginRendererMemo)
