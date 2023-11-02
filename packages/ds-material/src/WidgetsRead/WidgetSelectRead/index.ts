import { WidgetOptionsRead, WidgetOptionsReadProps } from '@xy-form/ds-material/WidgetsRead/WidgetOptionsRead'
import React from 'react'
import { WidgetProps, WithScalarValue } from '@xy-form/ui-schema'
import { MuiWidgetBinding } from '@xy-form/ds-material/widgetsBinding'

/**
 * @deprecated use `WidgetOptionsRead` instead
 */
export const WidgetSelectRead: React.ComponentType<WidgetProps<MuiWidgetBinding> & WithScalarValue & WidgetOptionsReadProps> = WidgetOptionsRead
