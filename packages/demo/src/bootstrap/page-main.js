import React from 'react';
import {Dashboard} from './Dashboard';
import {schemaTestBts, dataDemoMain} from '../schemas/demoBts';
import {schemaGrid} from '../schemas/demoGrid';
import {widgets} from '@xy-form/ds-bootstrap';
import {UIGenerator, isInvalid, createOrderedMap, createStore} from '@xy-form/ui-schema';
import {browserT} from '../t';
import {BtsSchemaDebug} from '../component/BtsSchemaDebug';
import clsx from 'clsx';
import {storeUpdater} from '@xy-form/ui-schema/storeUpdater';

const DemoGrid = () => {
    const [store, setStore] = React.useState(() => createStore(createOrderedMap({})));

    const onChangeNext = React.useCallback((actions) => {
        setStore(storeUpdater(actions))
    }, [setStore])

    return <UIGenerator
        schema={schemaGrid(12)}
        store={store}
        onChange={onChangeNext}
        widgets={widgets}
        t={browserT}
    >
        <BtsSchemaDebug/>
    </UIGenerator>
};

const MainStore = () => {
    const [showValidity, setShowValidity] = React.useState(false);
    const [store, setStore] = React.useState(() => createStore(createOrderedMap(dataDemoMain)));
    const [schema, setSchema] = React.useState(schemaTestBts);

    const onChangeNext = React.useCallback((actions) => {
        setStore(storeUpdater(actions))
    }, [setStore])

    return <React.Fragment>
        <UIGenerator
            schema={schema}
            store={store}
            onChange={onChangeNext}
            widgets={widgets}
            showValidity={showValidity}
            t={browserT}
        >
            <BtsSchemaDebug setSchema={setSchema} schema={schema}/>
        </UIGenerator>

        <button className={clsx('btn', 'btn-primary', 'col-12', 'text-uppercase')} onClick={() => setShowValidity(!showValidity)}>validity</button>
        {isInvalid(store.getValidity()) ? 'invalid' : 'valid'}

    </React.Fragment>
};

export default () => {
    return <Dashboard>
        <div>
            <MainStore/>
            <DemoGrid/>
        </div>
    </Dashboard>
};
