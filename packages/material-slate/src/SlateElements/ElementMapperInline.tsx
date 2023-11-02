import { RenderElementProps } from '@xy-form/material-slate/Slate/SlateTypings'
import { mappingBasicInline } from '@xy-form/material-slate/SlateElements/mappingBasicInline'
import { editorIsEnabled } from '@xy-form/material-slate/Slate/editorIsEnabled'
import { ElementMapperType } from '@xy-form/material-slate/SlateElements/ElementMapper'

export interface ElementMapping {
    [k: string]: (props: RenderElementProps) => JSX.Element
}

const elementMapping: ElementMapping = {
    ...mappingBasicInline,
}

export const ElementMapperInline: ElementMapperType = (props) => {
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

    return elementMapping['span'](props)
}
