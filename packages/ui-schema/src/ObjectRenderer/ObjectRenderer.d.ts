import * as React from 'react'
import { WidgetProps } from '@xy-form/ui-schema/Widget'
import { GroupRendererProps } from '@xy-form/ui-schema/WidgetsBinding'

export interface ObjectRendererProps extends WidgetProps {
    noGrid?: GroupRendererProps['noGrid']
}

export function ObjectRenderer<P extends ObjectRendererProps>(props: P): React.ReactElement
