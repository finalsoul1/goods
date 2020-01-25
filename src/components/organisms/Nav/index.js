import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import { AppBar, Tabs, Tab, Toolbar, Typography, Button, Link } from '@material-ui/core'
import { NavLink, withRouter } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

import TabPanel from './TabPanel'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

const Nav = (props) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log(props)
  }, [])

  const handleChange = (event, newValue) => {
    console.log('nav value: ', newValue)
    setValue(newValue)
  }

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `tabpanel-${index}`
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          // indicatorColor="primary"
          // textColor="primary"
        >
          <Tab label="상품 생성" {...a11yProps(0)} />
          <Tab label="Menu1" {...a11yProps(1)} />
          <Tab label="Menu2" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  )
}

export default Nav
