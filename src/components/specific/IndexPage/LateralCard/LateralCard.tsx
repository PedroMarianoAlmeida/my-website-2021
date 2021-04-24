import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import LateralCardTop from './LateralCardTop'
import LateralCardBottom from './LateralCardBottom'
import LateralCardMiddle from './LateralCardMiddle/LateralCardMIddle'

const LateralCard = ({ fitHeight }) => {
  return (
    <Paper variant="outlined" square elevation={3}>
      <Box
        display="flex"
        height={fitHeight ? '67vh' : null}
        flexDirection="column"
      >
        <Box>
          <LateralCardTop backgroundColor="#d52b1e" />
        </Box>

        <Box overflow="auto" flexGrow={1} flexShrink={1}>
          <LateralCardMiddle backgroundColor="#EA7067" />
        </Box>

        <Box height="20px">
          <LateralCardBottom backgroundColor="#d52b1e" />
        </Box>
      </Box>
    </Paper>
  )
}

export default LateralCard
