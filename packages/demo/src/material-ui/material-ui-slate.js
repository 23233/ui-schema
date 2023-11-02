import React from 'react';
import AppTheme from './layout/AppTheme';
import Dashboard from './dashboard/Dashboard';
import Grid from '@mui/material/Grid';
import {widgets} from '@xy-form/ds-material';
import {RichContent, RichContentInline} from '@xy-form/material-slate';
import {schemaDemoSlate, schemaDemoSlateSingle} from '../schemas/demoSlate';
import {RichContentPane} from '@xy-form/material-slate/Widgets/RichContentPane';
import {browserT} from '../t';
import {UIMetaProvider} from '@xy-form/ui-schema';
import {DummyRenderer} from './component/MuiMainDummy';

const customWidgets = {...widgets};
customWidgets.custom = {
    ...widgets.custom,
    RichContentPane: RichContentPane,
    RichContent: RichContent,
    RichContentInline: RichContentInline,
};

const Main = ({classes = {}}) => {
    return <React.Fragment>
        <Grid item xs={12}>
            <DummyRenderer id={'schemaSlate'} open schema={schemaDemoSlateSingle} classes={classes}/>
        </Grid>
        <Grid item xs={12}>
            <DummyRenderer id={'schemaSlate'} open schema={schemaDemoSlate} classes={classes}/>
        </Grid>
    </React.Fragment>
};

export default () => <AppTheme>
    <UIMetaProvider widgets={customWidgets} t={browserT}>
        <Dashboard main={Main}/>
    </UIMetaProvider>
</AppTheme>

export {customWidgets}
