import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  swatch: {
    display: 'inline-block',
    padding: '5px',
    cursor: 'pointer',
    borderRadius: '1px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)'
  },
  color: {
    width: '36px',
    height: '14px',
    borderRadius: '2px',
    background: props => props.color || '#fff'
  },
  popover: {
    position: 'absolute',
    zIndex: '2'
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  }
}))

const CustomColorPicker = (props) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles(props)
  const { float } = props

  const handleOpen = () => {
    setOpen(!open)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (color) => {
    props.changeColor(color)
  }

  return (
    <div className={classes.root}>
      <div className={classes.swatch} onClick={handleOpen}>
        <div className={classes.color}/>
      </div>
      {open ? <div className={float && classes.popover}>
        <div
          className={float && classes.cover}
          onClick={handleClose}/>
        <ChromePicker
          color={props.color}
          onChange={handleChange}
        />
      </div> : <div/>}
    </div>
  )
}

export default CustomColorPicker
