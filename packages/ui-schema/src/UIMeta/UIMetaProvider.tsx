import React from 'react'
import { Translator } from '@ui-schema/ui-schema/Translate/makeTranslator'
import { WidgetProps } from '@ui-schema/ui-schema/Widget'
import { getDisplayName } from '@ui-schema/ui-schema/Utils/memo'
import { WidgetsBindingFactory } from '@ui-schema/ui-schema/WidgetsBinding'

// @ts-ignore
const UIMetaContextObj = React.createContext<UIMetaContext>({})

export interface UIMetaContextData<W extends WidgetsBindingFactory = WidgetsBindingFactory> {
    widgets: W
    t: Translator
}

export type UIMetaContext<C extends {} = {}, W extends WidgetsBindingFactory = WidgetsBindingFactory> = C & UIMetaContextData<W>

export function UIMetaProvider<C extends {} = {}, W extends WidgetsBindingFactory = WidgetsBindingFactory>({children, ...props}: React.PropsWithChildren<UIMetaContext<C, W>>): React.ReactElement {
    return <UIMetaContextObj.Provider value={props}>
        {children}
    </UIMetaContextObj.Provider>
}

export const useUIMeta = <C extends {} = {}, W extends WidgetsBindingFactory = WidgetsBindingFactory>(): UIMetaContext<C, W> => {
    // @ts-ignore
    return React.useContext<UIMetaContext<C, W>>(UIMetaContextObj)
}

export const withUIMeta = <P extends WidgetProps, C extends {} = {}, W extends WidgetsBindingFactory = WidgetsBindingFactory>(
    Component: React.ComponentType<P & UIMetaContext<C, W>>
): React.ComponentType<P> => {
    const WithUIMeta = (p: P) => {
        const meta = useUIMeta<C, W>()
        return <Component {...meta} {...p}/>
    }
    WithUIMeta.displayName = `WithUIMeta(${getDisplayName(Component)})`
    return WithUIMeta
}
