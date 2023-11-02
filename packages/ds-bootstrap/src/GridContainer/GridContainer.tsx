import React from 'react'
import clsx from 'clsx'
import { PluginStackWrapperProps } from '@xy-form/ui-schema'

export interface GridContainerProps {
    className?: string
}

export const GridContainer: React.FC<GridContainerProps & PluginStackWrapperProps> = (
    {
        className,
        children,
    },
) => {
    return <div className={clsx('row', className)}>{children}</div>
}
