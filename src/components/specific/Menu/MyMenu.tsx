import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((appBarHeight) => ({
  root: {
    height: '64px',
  },
}))

const MyMenu = ({ appBarHeight }) => {
  const classes = useStyles(appBarHeight)

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography>Pedro Programmer</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MyMenu
