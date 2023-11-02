import { addNestKey } from '@xy-form/ui-schema/UIStore'
import { ScopeOnChangeHandler } from '@xy-form/ui-schema/storeUpdater'
import { updateStoreScope } from '@xy-form/ui-schema/storeScopeUpdater'
import { storeBuildScopeTree } from '@xy-form/ui-schema/storeBuildScopeTree'

export const scopeUpdaterInternals: ScopeOnChangeHandler = (store, storeKeys, newValue) => {
    //if (typeof oldValue === 'undefined') {
    // initializing the tree for correct data types
    // https://github.com/ui-schema/ui-schema/issues/119
    store = storeBuildScopeTree(storeKeys, 'internals', store, 'internals', false)
    //}
    return updateStoreScope(
        store, 'internals', storeKeys.size ? addNestKey('internals', storeKeys) : storeKeys,
        newValue
    )
}
