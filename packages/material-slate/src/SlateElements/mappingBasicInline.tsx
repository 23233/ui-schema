import { pluginOptions } from '@xy-form/material-slate/Slate/pluginOptions'
import React from 'react'
import { ElementMapping } from '@xy-form/material-slate/SlateElements/ElementMapper'
import { mappingAlign } from '@xy-form/material-slate/SlateElements/mappingAlign'

export const mappingBasicInline: ElementMapping = {
    // eslint-disable-next-line react/display-name
    [pluginOptions.code_line.type]: ({attributes, children}) => <div {...attributes}>{children}</div>,
    // eslint-disable-next-line react/display-name
    'span': ({attributes, children}) => <span {...attributes} style={{display: 'block'}}>{children}</span>,
    ...mappingAlign,
}
