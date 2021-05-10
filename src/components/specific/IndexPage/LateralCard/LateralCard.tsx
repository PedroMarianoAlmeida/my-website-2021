import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import LateralCardTop from './LateralCardTop'
import LateralCardBottom from './LateralCardBottom'
import LateralCardMiddle from './LateralCardMiddle/LateralCardMIddle'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
})

const LateralCard = ({ desktopLayout }) => {
  const classes = useStyles()
  return (
    <Paper variant="outlined" square elevation={3} className={classes.root}>
      <LateralCardTop backgroundColor="#02A9EA" />

      <LateralCardMiddle
        backgroundColor="#47FF47"
        desktopLayout={desktopLayout}
      />

      <LateralCardBottom backgroundColor="#02A9EA" />
    </Paper>
  )
}

export default LateralCard
