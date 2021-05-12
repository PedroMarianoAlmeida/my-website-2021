import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#faae2b',
    },
    secondary: {
      main: '#fa5246',
    },
    error: {
      main: '#ff0101',
    },
    background: {
      default: '#f2f7f5',
    },
  },
})

export default theme
