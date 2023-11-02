import React from 'react';
import AccountBox from '@mui/icons-material/AccountBox';
import {makeTranslator, createMap} from '@xy-form/ui-schema';
import * as en from '@xy-form/dictionary/en'
import * as de from '@xy-form/dictionary/de'

const icons = {
    'AccountBox': () => <AccountBox/>,
};

const dicEN = createMap({
    error: en.errors,
    labels: {...en.labels, ...en.richText, ...en.dnd},
    formats: {...en.formats},
    pagination: {...en.pagination},
    // for material-ui only icons which are set manually through schema are needed to add
    icons,
});

const dicDE = createMap({
    error: de.errors,
    labels: {...de.labels, ...de.richText, ...de.dnd},
    formats: {...de.formats},
    pagination: {...de.pagination},
    icons,
});

const tEN = makeTranslator(dicEN, 'en');
const tDE = makeTranslator(dicDE, 'de');

const browserT = (text, context, schema) => {
    const locale = window.localStorage.getItem('locale') || navigator.language;
    return locale === 'de' ? tDE(text, context, schema) : tEN(text, context, schema);
};

export {browserT}
