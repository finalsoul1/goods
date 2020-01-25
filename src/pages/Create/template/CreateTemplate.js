import React from 'react'
import CreateContainer from '../container/CreateContainer.js'
import ProductContainer from '../container/ProductContainer.js'
import MenuContainer from '../container/MenuContainer.js'
import AddContainer from '../container/AddContainer.js'
import SubMenuContainer from '../container/SubMenuContainer.js'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  menu: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const CreateTemplate = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <AddContainer/>
          </Paper>
          <Paper className={classes.paper}>
            <ProductContainer/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper}>
            <SubMenuContainer/>
            <CreateContainer/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.menu}>
            <MenuContainer/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreateTemplate
