import * as React from 'react'
import { WidgetProps } from '@xy-form/ui-schema/Widget'

export interface OptionsRadioProps extends WidgetProps {
    row?: boolean
}

export function OptionsRadio<P extends OptionsRadioProps>(props: P): React.ReactElement<P>
