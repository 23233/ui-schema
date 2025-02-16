import React from 'react'
import { List } from 'immutable'
import { memo } from '@xy-form/ui-schema/Utils/memo'
import { WidgetProps } from '@xy-form/ui-schema/Widget'
import { useUIStore, WithOnChange } from '@xy-form/ui-schema/UIStore'
import {
    GenericListContent, GenericListFooter,
    GenericListItem,
    GenericListItemMore, GenericListItemPos,
} from '@xy-form/ds-material/BaseComponents/GenericList'
import { MuiWidgetBinding } from '@xy-form/ds-material/widgetsBinding'

export const GenericListContentMemo = memo(GenericListContent)

export const GenericList = (props: WidgetProps<MuiWidgetBinding> & WithOnChange): React.ReactElement => {
    const {store} = useUIStore()
    const {value} = store?.extractValues<List<any>>(props.storeKeys) || {}
    // extracting and calculating the list size here, not passing down the actual list for performance reasons
    // https://github.com/ui-schema/ui-schema/issues/133
    return <GenericListContentMemo
        {...props}
        listSize={value?.size || 0}
        ComponentItemPos={GenericListItemPos}
        ComponentItemMore={GenericListItemMore}
        ComponentItem={GenericListItem}
        ComponentFooter={GenericListFooter}
        // e.g. use `Button` instead of `IconButton` for `add-item`
        //btnAddShowLabel
    />
}

