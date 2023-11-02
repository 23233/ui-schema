import React from 'react'
import { NumberRenderer, StringRenderer, TextRenderer } from '@xy-form/ds-material/Widgets/TextField'
import { Select, SelectMulti } from '@xy-form/ds-material/Widgets/Select'
import { BoolRenderer } from '@xy-form/ds-material/Widgets/OptionsBoolean'
import { OptionsCheck } from '@xy-form/ds-material/Widgets/OptionsCheck'
import { OptionsRadio } from '@xy-form/ds-material/Widgets/OptionsRadio'
import { NumberIconRenderer, StringIconRenderer, TextIconRenderer } from '@xy-form/ds-material/Widgets/TextFieldIcon'
import { SimpleList } from '@xy-form/ds-material/Widgets/SimpleList'
import { GenericList } from '@xy-form/ds-material/Widgets/GenericList'
import { NumberSlider } from '@xy-form/ds-material/Widgets/NumberSlider'
import { AccordionsRenderer } from '@xy-form/ds-material/Widgets/Accordions'
import { RootRenderer, GroupRenderer } from '@xy-form/ds-material/Grid'
import { pluginStack } from '@xy-form/ds-material/pluginStack'
import { WidgetRenderer } from '@xy-form/ui-schema/WidgetRenderer'
import { validators } from '@xy-form/ui-schema/Validators/validators'
import { CardRenderer, FormGroup, LabelBox } from '@xy-form/ds-material/Widgets'
import { WidgetProps, WidgetType } from '@xy-form/ui-schema/Widget'
import { UIStoreActions } from '@xy-form/ui-schema/UIStoreActions'
import { WithScalarValue } from '@xy-form/ui-schema/UIStore'
import { WidgetsBindingFactory } from '@xy-form/ui-schema/WidgetsBinding'
import { InfoRendererProps } from '@xy-form/ds-material/Component/InfoRenderer'
import { ErrorFallback } from '@xy-form/ds-material/ErrorFallback'

export interface MuiWidgetsBindingTypes<C extends {} = {}, W extends MuiWidgetBinding = MuiWidgetBinding> {
    string: React.ComponentType<WidgetProps<W> & C & WithScalarValue>
    boolean: React.ComponentType<WidgetProps<W> & C & WithScalarValue>
    number: React.ComponentType<WidgetProps<W> & C & WithScalarValue>
    integer: React.ComponentType<WidgetProps<W> & C & WithScalarValue>
}

export interface MuiWidgetsBindingCustom<C extends {} = {}, W extends MuiWidgetBinding = MuiWidgetBinding, A = UIStoreActions> {
    [key: string]: WidgetType<C, W, A> | WidgetType<C, WidgetsBindingFactory, A>
}

export interface MuiWidgetBindingExtra {
    InfoRenderer?: React.ComponentType<InfoRendererProps>
}

export type MuiWidgetBinding<C extends {} = {}> = WidgetsBindingFactory<MuiWidgetBindingExtra, MuiWidgetsBindingTypes<C>, MuiWidgetsBindingCustom<C>>

export const widgets: MuiWidgetBinding = {
    ErrorFallback: ErrorFallback,
    RootRenderer,
    GroupRenderer,
    WidgetRenderer,
    pluginStack,
    pluginSimpleStack: validators,
    types: {
        string: StringRenderer,
        boolean: BoolRenderer,
        number: NumberRenderer,
        integer: NumberRenderer,
    },
    custom: {
        Accordions: AccordionsRenderer,
        Text: TextRenderer,
        StringIcon: StringIconRenderer,
        TextIcon: TextIconRenderer,
        NumberIcon: NumberIconRenderer,
        NumberSlider,
        SimpleList,
        GenericList,
        OptionsCheck,
        OptionsRadio,
        Select,
        SelectMulti,
        Card: CardRenderer,
        LabelBox,
        FormGroup,
    },
}
