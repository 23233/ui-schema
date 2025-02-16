import * as React from 'react'
import { WidgetProps } from '@xy-form/ui-schema/Widget'

export interface WidgetPropsBoolean extends WidgetProps {
    value: boolean
}

export function BoolRenderer<P extends WidgetPropsBoolean>(props: P): React.ReactElement<P>
