import type { AppProps } from 'next/app'

import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'

import theme from './../src/lib/theme'
import MyMenu from '../src/components/specific/Menu/MyMenu'

const appBarHeight = '64px'

function MyApp({ Component, pageProps }: AppProps) {
  const useStyles = makeStyles({
    content: {
      marginTop: appBarHeight,
    },
  })
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyMenu appBarHeight={appBarHeight} />
      <Box className={classes.content}>
        <Component {...pageProps} appBarHeight={appBarHeight} />
      </Box>
    </ThemeProvider>
  )
}

export default MyApp
