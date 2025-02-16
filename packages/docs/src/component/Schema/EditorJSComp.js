import React from 'react';
import {EditorJSWidget} from '@xy-form/material-editorjs/Widgets/EditorJSWidget';
import Paragraph from '@editorjs/paragraph'
import CheckList from '@editorjs/checklist'
import List from '@editorjs/list'
import Header from '@editorjs/header'
import Table from '@editorjs/table'

const tools = {
    paragraph: Paragraph,
    checkList: CheckList,
    list: List,
    header: Header,
    table: Table,
};

export const EditorJSComp = (props = {}) => {
    return <EditorJSWidget
        {...props}
        tools={tools}
    />
}
