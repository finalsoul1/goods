import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core'
import Drag from 'components/atoms/Drag'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(props => ({
  title: {
    cursor: props => props.drag ? 'move' : 'default'
  }
}))


const CustomDialog = (props) => {
  const classes = useStyles(props)
  const { open, handleClose } = props
  const { options, title, contents, actions } = props

  return (
    <Dialog
      {...options}
      PaperComponent={props.drag && Drag}
      // disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={handleClose}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <DialogContent>
        {contents}
      </DialogContent>
      <DialogActions>
        {actions}
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
