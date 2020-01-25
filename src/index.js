import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'mobx-react'
import stores from 'store/stores'
import theme from 'style/style'
import jss from 'style/jss'
import { ThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/core/styles'

ReactDOM.render(
  <Provider {...stores()}>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </StylesProvider>
  </Provider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
