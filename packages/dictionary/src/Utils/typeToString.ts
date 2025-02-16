import { SchemaTypesType } from '@xy-form/ui-schema'
import { List } from 'immutable'

export const typeToString = (type: SchemaTypesType): string => typeof type === 'string' ? type :
    // @ts-ignore
    List.isList(type) ? type.join(', ') : ''
