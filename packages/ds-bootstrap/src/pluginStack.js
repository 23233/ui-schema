import {SchemaGridHandler} from './Grid';
import {
    DefaultHandler, DependentHandler,
    ConditionalHandler, CombiningHandler,
    ReferencingHandler, ExtractStorePlugin,
} from '@xy-form/ui-schema/Plugins';
import {ValidityReporter} from '@xy-form/ui-schema/ValidityReporter';
import {PluginSimpleStack} from '@xy-form/ui-schema/PluginSimpleStack';

export const pluginStack = [
    ReferencingHandler,
    SchemaGridHandler,
    ExtractStorePlugin,
    CombiningHandler,
    DefaultHandler,
    DependentHandler,
    ConditionalHandler,
    PluginSimpleStack,
    ValidityReporter,
];
