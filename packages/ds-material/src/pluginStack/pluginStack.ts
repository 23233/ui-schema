import { SchemaGridHandler } from '@xy-form/ds-material/Grid'
import {
    DefaultHandler, DependentHandler,
    ConditionalHandler, CombiningHandler,
    ReferencingHandler, ExtractStorePlugin,
} from '@xy-form/ui-schema/Plugins'
import { PluginSimpleStack } from '@xy-form/ui-schema/PluginSimpleStack'
import { ValidityReporter } from '@xy-form/ui-schema/ValidityReporter'
import { ComponentPluginType } from '@xy-form/ui-schema/PluginStack'

export const pluginStack: ComponentPluginType[] = [
    ReferencingHandler,
    SchemaGridHandler,
    ExtractStorePlugin,
    CombiningHandler,
    DefaultHandler,
    DependentHandler,
    ConditionalHandler,
    PluginSimpleStack,
    ValidityReporter,
]
