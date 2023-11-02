import React from 'react'
import { useUIStoreActions } from '@xy-form/ui-schema/UIStoreActions'
import { getDisplayName } from '@xy-form/ui-schema/Utils/memo'
import { StoreKeys, useUIStore, ExtractValueOverwriteProps, WithValidity } from '@xy-form/ui-schema/UIStore'

export const extractValidity = <P extends WithValidity & { storeKeys: StoreKeys }>(Component: React.ComponentType<P>): React.ComponentType<Omit<P, keyof WithValidity> & ExtractValueOverwriteProps> => {
    const ExtractValidity = (p: Omit<P, keyof WithValidity> & ExtractValueOverwriteProps) => {
        const {store, showValidity} = useUIStore()
        const {onChange} = useUIStoreActions()
        // @ts-ignore
        return <Component
            {...p}
            validity={p.storeKeys.size ? store?.getValidity().getIn(p.storeKeys) : store?.getValidity()}
            onChange={onChange}
            showValidity={p.showValidity || showValidity}
        />
    }
    ExtractValidity.displayName = `ExtractValidity(${getDisplayName(Component)})`
    return ExtractValidity
}
