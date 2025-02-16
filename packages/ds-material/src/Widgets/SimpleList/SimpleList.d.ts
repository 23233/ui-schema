import * as React from 'react'
import { WidgetProps } from '@xy-form/ui-schema/Widget'
import { WithOnChange, WithValue } from '@xy-form/ui-schema'
import { ListButtonOverwrites } from '@xy-form/ds-material/Component'

export type SimpleListItemProps = Pick<WidgetProps, 'showValidity' | 'schema' | 'storeKeys' | 'notDeletable' | 'readOnly' | 'required' | 'onChange' | 'level' | 'index'>

export function SimpleListItem<P extends SimpleListItemProps>(props: P): React.ReactElement

export function SimpleListInner<P extends WidgetProps>(props: P & { listSize: number } & ListButtonOverwrites & WithOnChange): React.ReactElement

export function SimpleListBase<P extends WidgetProps>(props: P & { listSize: number } & ListButtonOverwrites & WithOnChange): React.ReactElement

export function SimpleListWrapper<P extends WidgetProps>(props: P & ListButtonOverwrites & WithValue): React.ReactElement

export function SimpleList<P extends WidgetProps>(props: P & ListButtonOverwrites): React.ReactElement
