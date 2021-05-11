import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { makeStyles } from '@material-ui/core/styles'
import MenuOptions from './MenuOptions'

const MyMenu = ({ appBarHeight }) => {
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
      flexGrow: 1,
      textAlign: 'center',
      fontFamily: 'Special Elite',
    },

    titleResponsive: {
      fontSize: '1.4rem',
    },
  })

  const classes = useStyles()
  const matches = useMediaQuery('(max-width:480px)')

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.menu}>
        <Typography
          variant="h4"
          className={`${classes.title} ${matches && classes.titleResponsive}`}
        >
          {'< '}Pedro Programmer{' />'}
        </Typography>
        <MenuOptions />
      </Toolbar>
    </AppBar>
  )
}

export default MyMenu
