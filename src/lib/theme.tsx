import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EFD81D',
    },
    secondary: {
      main: '#02A9EA',
    },
    error: {
      main: '#ff0101',
    },
    background: {
      default: '#FF99FD',
    },
  },
})

export default theme
