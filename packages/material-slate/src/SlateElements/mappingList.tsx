import { pluginOptions } from '@xy-form/material-slate/Slate/pluginOptions'
import React from 'react'
import { ElementMapping } from '@xy-form/material-slate/SlateElements/ElementMapper'

export const mappingList: ElementMapping = {
    // eslint-disable-next-line react/display-name
    [pluginOptions.ul.type]: ({attributes, children}) => <ul {...attributes}>{children}</ul>,
    // eslint-disable-next-line react/display-name
    [pluginOptions.ol.type]: ({attributes, children}) => <ol {...attributes}>{children}</ol>,
    // eslint-disable-next-line react/display-name
    [pluginOptions.li.type]: ({attributes, children}) => <li {...attributes}>{children}</li>,
}
