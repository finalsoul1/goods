import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGlow: 1,
    textAlign: '-webkit-center',
    '& > *': {
      cursor: props => props.cursor || 'default'
    }
  }

}))

const ListItem = (props) => {
  const classes = useStyles(props)

  const children = React.Children.map(props.children, child => {
    return (
      <Grid className={classes.root} item xs={6} sm={3}>
        {React.cloneElement(child, props.options)}
      </Grid>
    )
  })
  return (
    <div>
      <Grid container spacing={2}>
        {props.children && children}
      </Grid>
    </div>
  )
}

export default ListItem
