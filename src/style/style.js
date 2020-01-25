import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  noneStyledUl: {
    listStyle: 'none',
    padding: 0,
    '& > li': {
      marginBottom: '16px',
      '& > button': {
        width: '100%'
      }
    }
  },

})

export default theme
