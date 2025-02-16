import React from 'react';
import AppTheme from './layout/AppTheme';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {ImmutableEditor, themeMaterial} from 'react-immutable-editor';
import Dashboard from './dashboard/Dashboard';
import {widgets} from '@xy-form/ds-material';
import {browserT} from '../t';
import {MuiSchemaDebug} from './component/MuiSchemaDebug';
import {schemaDemoReferencingRecursive} from '../schemas/demoReferencing';
import IcSave from '@mui/icons-material/Save'
import IcClear from '@mui/icons-material/Clear'
import IcHistory from '@mui/icons-material/History'
import IcRedo from '@mui/icons-material/Redo'
import IcUndo from '@mui/icons-material/Undo'
import useTheme from '@mui/material/styles/useTheme';
import {isInvalid} from '@xy-form/ui-schema/ValidityReporter/isInvalid';
import {fromJSOrdered} from '@xy-form/ui-schema/Utils/createMap';
import {createStore, UIStoreProvider} from '@xy-form/ui-schema/UIStore';
import {toHistory, useStorePro} from '@xy-form/pro/UIStorePro';
import {UIMetaProvider} from '@xy-form/ui-schema/UIMeta';
import {GridContainer} from '@xy-form/ds-material/GridContainer';
import {injectPluginStack} from '@xy-form/ui-schema/applyPluginStack';

const customWidgets = {...widgets};
customWidgets.custom = {
    ...widgets.custom,
};

// or set to `undefined` for no-initial values
//const initialStore = createStore(fromJSOrdered({person: {name: 'Kim Smith'}}))
const initialStore = createStore(fromJSOrdered({
    person: {
        'name': 'Kim Smith',
        'children': [
            {
                'name': '4335534',
            },
            {
                'name': 'gegfgtg',
                'children': [
                    {
                        'name': 'asdcvbn',
                        'children': [
                            {
                                'name': '233456',
                            },
                        ],
                    },
                    {
                        'name': 'fddgfdfdfgdfs',
                        'children': [
                            {
                                'name': '23456',
                            },
                        ],
                    },
                ],
            },
            {
                'name': 'dfgdgfdgf',
            },
        ],
    },
}))

const schema = schemaDemoReferencingRecursive
const GridStack = injectPluginStack(GridContainer)
const Main = () => {
    const theme = useTheme();

    const [showHistory, setShowHistory] = React.useState(false);
    const [showValidity, setShowValidity] = React.useState(false);

    const prevOriginalStore = React.useRef(initialStore?.getValues())
    const {
        reset: resetHistoryStore,
        onChange, store, setStore,
        redoHistory, undoHistory,
        // todo: multi type support #68
    } = useStorePro({type: String(schema.get('type')), initialStore: initialStore})

    // todo: multi type support #68
    const type = String(schema.get('type'))
    const reset = React.useCallback(() => {
        resetHistoryStore(type, initialStore)
        prevOriginalStore.current = initialStore?.getValues()
    }, [type, resetHistoryStore, prevOriginalStore])

    const changedStore = (
        (!prevOriginalStore.current && store.current?.getValues().size > 0) ||
        (prevOriginalStore.current && !prevOriginalStore.current?.equals(store.current?.getValues()))
    )

    return <React.Fragment>
        <div>
            <Button
                startIcon={<IcUndo/>}
                disabled={store.activeIndex === 0}
                onClick={() => undoHistory(1)}
            >undo</Button>
            <Button
                startIcon={<IcRedo/>}
                disabled={store.activeIndex + 1 === store.list.size}
                onClick={() => redoHistory(1)}
            >redo</Button>
            <Button
                startIcon={<IcHistory/>}
                disabled={store.list.size === 1}
                onClick={() => setShowHistory(s => !s)}
            >history</Button>
            <Button
                startIcon={<IcClear/>}
                disabled={store.list.size === 1}
                onClick={reset}
            >clear</Button>
            <Button
                startIcon={<IcSave/>}
                disabled={!changedStore}
            >save</Button>
        </div>

        <UIStoreProvider
            store={store.current}
            onChange={onChange}
            showValidity={showValidity}
        >
            <GridStack isRoot schema={schema}/>
            <MuiSchemaDebug schema={schema}/>
        </UIStoreProvider>

        <div style={{width: '100%'}}>
            <Button onClick={() => setShowValidity(!showValidity)}>validity</Button>
            <div>
                {isInvalid(store.current.getValidity()) ? 'invalid' : 'valid'}
            </div>
        </div>

        <Dialog
            onClose={() => setShowHistory(false)}
            open={showHistory}
        >
            <DialogTitle style={{textAlign: 'center'}}>Store History</DialogTitle>
            <DialogContent
                style={{minWidth: 350}}
            >
                {store.list.map((s, i) => <div key={i} style={{marginBottom: 18}}>
                    <Button
                        style={{fontWeight: 'bold'}}
                        onClick={() => {
                            setStore(store => toHistory(store, i))
                            setShowHistory(false)
                        }}
                    >Index: {i} {store.activeIndex === i ? 'is-active' : null}</Button>
                    <ImmutableEditor
                        data={s.getValues()}
                        onChange={() => console.log('not implemented')}
                        getVal={keys => s.getValues().getIn(keys)}
                        theme={{
                            ...themeMaterial,
                            type: theme.palette.type,
                            base00: theme.palette.background.paper,
                            base0D: theme.palette.text.secondary,
                            base0B: theme.palette.text.primary,
                        }}
                    />
                </div>)}
            </DialogContent>
        </Dialog>
    </React.Fragment>
};

export default () => <AppTheme>
    <UIMetaProvider widgets={customWidgets} t={browserT}>
        <Dashboard main={Main}/>
    </UIMetaProvider>
</AppTheme>

export {customWidgets}
