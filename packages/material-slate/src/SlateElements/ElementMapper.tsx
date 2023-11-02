import { RenderElementProps, RenderMapperProps } from '@xy-form/material-slate/Slate/SlateTypings'
import { mappingBasic } from '@xy-form/material-slate/SlateElements/mappingBasic'
import { mappingBasicInline } from '@xy-form/material-slate/SlateElements/mappingBasicInline'
import { mappingList } from '@xy-form/material-slate/SlateElements/mappingList'
import { mappingAdvanced } from '@xy-form/material-slate/SlateElements/mappingAdvanced'
import { editorIsEnabled } from '@xy-form/material-slate/Slate/editorIsEnabled'

export interface ElementMapping {
    [k: string]: (props: RenderElementProps) => JSX.Element
}

const elementMapping: ElementMapping = {
    ...mappingBasic,
    ...mappingBasicInline,
    ...mappingList,
    ...mappingAdvanced,
}

export type ElementMapperType = ({attributes, children, element}: RenderMapperProps) => JSX.Element

export const ElementMapper: ElementMapperType = (props) => {
    const {element, enableOnly} = props

    if (!editorIsEnabled(enableOnly, element.type)) {
        if (process.env.NODE_ENV === 'development') {
            console.log('editor type disabled in enableOnly for:', element.type)
        }
    }
    // eslint-disable-next-line no-prototype-builtins
    if (element.type && elementMapping.hasOwnProperty(element.type)) {
        return elementMapping[element.type](props)
    }

    if (process.env.NODE_ENV === 'development') {
        console.log('no type found for:', element.type)
    }

    return elementMapping['p'](props)
}
