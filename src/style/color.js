import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4511e',
      light: '#ff844c',
      dark: '#b91400',
      contrastText: '#fff'
    },
    secondary: {
      main: '#424242',
      light: '#6d6d6d',
      dark: '#1b1b1b',
      contrastText: '#000'
    }
  }
})

export default theme
