import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import LateralCardTop from './LateralCardTop'
import LateralCardBottom from './LateralCardBottom'
import LateralCardMiddle from './LateralCardMiddle/LateralCardMIddle'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'fit-content(1fr) fit-content(2fr) fit-content(1fr)',
  },
}))

const LateralCard = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box>
        <LateralCardTop backgroundColor="#E62D20" />
      </Box>

      <Box overflow="hidden">
        <Typography variant="p">TEXT </Typography>
        {/* <LateralCardMiddle backgroundColor="#EA7067" /> */}
      </Box>
      <Box>
        <LateralCardBottom backgroundColor="#E62D20" />
      </Box>
    </Box>
  )
}

export default LateralCard
