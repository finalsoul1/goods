import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: props => props.width || '100%',
  },
  item: {
    width: '100%',
  },
}))

const ImageItem = (props) => {
  const classes = useStyles(props)

  const handleClick = (e) => {
    props.click(e, props.imageUrl) || console.log(e.target.value)
  }

  return (
    <div className={classes.root}>
      <img
        className={classes.item}
        src={props.imageUrl}
        onClick={handleClick}
        draggable={false} />
    </div>
  )
}

ImageItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default ImageItem
