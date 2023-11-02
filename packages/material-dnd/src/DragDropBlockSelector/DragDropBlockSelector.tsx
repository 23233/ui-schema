import React from 'react'
import MuiList from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useBlocks } from '@xy-form/material-dnd/DragDropBlockProvider'
import { DragDropBlockComponentsBinding } from '@xy-form/material-dnd/DragDropBlock'
import { beautifyKey } from '@xy-form/ui-schema'

export const DragDropBlockSelector: DragDropBlockComponentsBinding['DndBlockSelector'] = ({onSelect}) => {
    const {blocks} = useBlocks()

    return <>
        <MuiList>
            {Object.keys(blocks).map(blockId => <ListItem
                key={blockId}
                button dense
                onClick={() => onSelect(blocks[blockId])}
            >
                <ListItemText
                    primary={beautifyKey(blockId)}
                />
            </ListItem>)}
        </MuiList>
    </>
}
