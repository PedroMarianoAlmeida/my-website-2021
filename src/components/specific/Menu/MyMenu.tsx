import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core/styles'
import MenuOptions from './MenuOptions'

const MyMenu = ({ appBarHeight, desktopLayout }) => {
  const useStyles = makeStyles({
    root: {
      height: appBarHeight,
    },

    menu: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },

    title: {
      fontFamily: 'Special Elite',
      cursor: 'pointer',
      display: 'inline',
    },

    titleResponsive: {
      fontSize: '1.4rem',
    },
  })

  const classes = useStyles()

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.menu}>
        <Box flexGrow={1} display="flex" justifyContent="center">
          <Link href="/">
            <Typography variant="h4" className={classes.title}>
              {'< '}Pedro Programmer{' />'}
            </Typography>
          </Link>
        </Box>
        <MenuOptions />
      </Toolbar>
    </AppBar>
  )
}

export default MyMenu
