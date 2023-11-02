import { UIStoreType, UIStoreUpdaterFn } from '@xy-form/ui-schema/UIStore'
import { UIStoreActions, UIStoreUpdaterData } from '@xy-form/ui-schema/UIStoreActions'
import { storeActionReducers } from '@xy-form/ui-schema/storeUpdater/storeActionReducers'

/**
 * @deprecated use `storeActionReducers` instead
 */
export const storeActionHandler = storeActionReducers as <S extends UIStoreType = UIStoreType, D extends UIStoreUpdaterData = UIStoreUpdaterData, A = UIStoreActions<S, D>>(action: A) => UIStoreUpdaterFn<D> | D
