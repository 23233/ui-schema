import { DndBlock } from '@xy-form/material-dnd/DragDropBlockProvider'
import React from 'react'

export interface DragDropBlockSelectorProps {
    onSelect: (area: DndBlock) => void
}

export interface DragDropBlockComponentsBinding {
    DndBlockSelector: React.ComponentType<DragDropBlockSelectorProps>
}
