import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from 'organisms/Nav'
import Image from 'pages/image'
import Home from 'pages/Home'
import Create from 'pages/Create'

function App (props) {

  return (
    <BrowserRouter>
      <Switch>
        <Fragment>
          <Nav props={props}/>
          <br/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/image" component={Image}/>
          <Route exact path="/create" component={Create}/>
        </Fragment>
      </Switch>
    </BrowserRouter>
  )
}

export default App
