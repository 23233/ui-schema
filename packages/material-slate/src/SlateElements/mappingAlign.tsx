import { pluginOptions } from '@xy-form/material-slate/Slate/pluginOptions'
import React from 'react'
import { ElementMapping } from '@xy-form/material-slate/SlateElements/ElementMapper'

export const mappingAlign: ElementMapping = {
    // eslint-disable-next-line react/display-name
    [pluginOptions.align_center.type]: ({attributes, children}) => <div {...attributes} style={{textAlign: 'center'}}>{children}</div>,
    // eslint-disable-next-line react/display-name
    [pluginOptions.align_right.type]: ({attributes, children}) => <div {...attributes} style={{textAlign: 'right'}}>{children}</div>,
    // eslint-disable-next-line react/display-name
    [pluginOptions.align_justify.type]: ({attributes, children}) => <div {...attributes} style={{textAlign: 'justify', whiteSpace: 'normal'}}>{children}</div>,
}
