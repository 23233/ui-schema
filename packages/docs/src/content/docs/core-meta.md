# UI Schema: Meta

## UIMetaProvider

Saves additional functions and meta-data for all renderers & generators.

- Provider: `UIMetaProvider`
- Hook: `useUIMeta`
- HOC: `withUIMeta`
- Properties/ContextData:
    - `widgets` JS-object, the [widget binding](/docs/widgets)
    - `t`: `function` translator function, see [translation](/docs/localization#translation)
    - use additional props to automatically supply your PluginStack with custom extensions
        - all passed in `props` are available in HOOKs and HOCs
        - the `PluginStack` passes down all - but allows to overwrite any by supplying the same `props` to `<PluginStack/>`

## Hook useUIMeta

```js
import React from "react";
import {useUIMeta} from "@xy-form/ui-schema";

const Comp = () => {
    const {widgets} = useUIMeta();

    const RootRenderer = widgets.RootRenderer;
    return <RootRenderer {...props}/>
};
```

## HOC withUIMeta

```js
import React from "react";
import {withUIMeta, memo} from "@xy-form/ui-schema";

const Comp = withUIMeta(
    memo(
        ({widgets, t, ...props}) => {
            const RootRenderer = widgets.RootRenderer;
            return <RootRenderer {...props}/>
        }
    )
);
```

## Read-Context

Only a special typing, works together with special components for a "read-or-write" mode.

> Check the [Material-UI demo code](https://github.com/ui-schema/ui-schema/blob/master/packages/demo/src/material-ui/material-ui-read-write.tsx) as implementation example

```typescript tsx
import React from 'react'
import {
    UIMetaProvider, UIStoreProvider,
    useUIMeta,
    UIStoreActions, UIStoreType, onChangeHandler, StoreSchemaType,
} from '@xy-form/ui-schema'
import { UIRootRenderer } from '@xy-form/ui-schema/UIRootRenderer'
import { UIMetaReadContextType } from '@xy-form/ui-schema/UIMetaReadContext'

const ReadableWritableEditor: React.ComponentType<{
    onChange: onChangeHandler
    store: UIStoreType
    schema: StoreSchemaType
    showValidity?: boolean
}> = ({onChange, store, schema}) => {
    const {widgets, ...metaCtx} = useUIMeta()
    const [edit, setEdit] = React.useState(false)
    const [dense, setDense] = React.useState(false)

    const customWidgetsRtd = React.useMemo(() => ({
        // todo: you maybe want to add an custom `GroupRenderer` to `widgets` which supports the `readDense` mode
        ...widgets,
        types: edit ? widgets.types : readWidgets.types,
        custom: edit ? widgets.custom : readWidgets.custom,
    }), [widgets, edit, readWidgets])

    return <React.Fragment>
        <div>
            <button onClick={() => setEdit(e => !e)}>{edit ? 'ready only' : 'edit'}</button>
            <button disabled={edit} onClick={() => setDense(e => !e)}>{dense ? 'normal-size' : 'dense'}</button>
        </div>
        <UIMetaProvider<UIMetaReadContextType>
            // re-use & overwrite of the global meta-context
            widgets={customWidgetsRtd} {...metaCtx}
            // custom meta-ctx only available within this UIMetaProvider context
            readActive={!edit} readDense={dense}
        >
            <UIStoreProvider<{}, any, UIStoreActions>
                store={store}
                onChange={onChange}
                showValidity={showValidity}
            >
                <UIRootRenderer schema={schema}/>
            </UIStoreProvider>
        </UIMetaProvider>
    </React.Fragment>
}
```

## Typescript Custom UIMetaContext

Customize `UIMetaContext`:

```typescript tsx
export interface UIMetaCustomContext {
    handleStuff: () => 'stuff'
}

<UIMetaProvider<UIMetaCustomContext>
    widgets={customWidgets}
    t={browserT}
    handleStuff={() => 'stuff'}
>
</UIMetaProvider>

const {handleStuff, widgets, t} = useUIMeta<UIMetaCustomContext>()

// typing to use `PluginStack`/`applyPluginStack` with custom context:
const WidgetTextField = applyPluginStack<UIMetaCustomContext>(StringRenderer)

// first additional widget props, second the custom context:
<PluginStack<{ readOnly: boolean }, UIMetaCustomContext>
    showValidity={showValidity}
    storeKeys={storeKeys.push('city') as StoreKeys}
    schema={schema.getIn(['properties', 'name']) as unknown as StoreSchemaType}
    parentSchema={schema}
    level={1}
    readOnly={false}
    // noGrid={false} (as grid-item is included in `PluginStack`)
/>
```
