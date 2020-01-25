import React from 'react'
import Draggable from 'react-draggable'
import Paper from '@material-ui/core/Paper'

const DragComponent = (props) => {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}

export default DragComponent
