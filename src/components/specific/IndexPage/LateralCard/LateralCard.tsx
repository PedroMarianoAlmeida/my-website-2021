import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import LateralCardTop from './LateralCardTop'
import LateralCardBottom from './LateralCardBottom'
import LateralCardMiddle from './LateralCardMiddle/LateralCardMIddle'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
})

const LateralCard = ({ desktopLayout }) => {
  const classes = useStyles()
  return (
    <Paper variant="outlined" square elevation={3} className={classes.root}>
      <LateralCardTop backgroundColor="#d52b1e" />

      <LateralCardMiddle
        backgroundColor="#EA7067"
        desktopLayout={desktopLayout}
      />

      <LateralCardBottom backgroundColor="#d52b1e" />
    </Paper>
  )
}

export default LateralCard
