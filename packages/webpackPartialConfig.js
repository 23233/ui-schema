
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@xy-form/ui-schema': path.resolve(__dirname, './ui-schema/src'),
'@xy-form/pro': path.resolve(__dirname, './ui-schema-pro/src'),
'@xy-form/dictionary': path.resolve(__dirname, './dictionary/src'),
'@xy-form/ds-material': path.resolve(__dirname, './ds-material/src'),
'@xy-form/ds-bootstrap': path.resolve(__dirname, './ds-bootstrap/src'),
'@xy-form/kit-dnd': path.resolve(__dirname, './kit-dnd/src'),
'@xy-form/material-pickers': path.resolve(__dirname, './material-pickers/src'),
'@xy-form/material-slate': path.resolve(__dirname, './material-slate/src'),
'@xy-form/material-editorjs': path.resolve(__dirname, './material-editorjs/src'),
'@xy-form/material-dnd': path.resolve(__dirname, './material-dnd/src'),

        }
    }
}