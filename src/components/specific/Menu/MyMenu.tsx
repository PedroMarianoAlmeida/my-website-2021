import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core/styles'
import MenuOptions from './MenuOptions'
import MenuLogo from './MenuLogo'

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
  })

  const classes = useStyles()

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.menu}>
        <MenuLogo desktopLayout={desktopLayout} />
        <MenuOptions />
      </Toolbar>
    </AppBar>
  )
}

export default MyMenu
