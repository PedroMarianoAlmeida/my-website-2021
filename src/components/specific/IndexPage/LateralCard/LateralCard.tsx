import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import LateralCardTop from './LateralCardTop'
import LateralCardBottom from './LateralCardBottom'
import LateralCardMiddle from './LateralCardMiddle/LateralCardMIddle'

const LateralCard = ({ fitHeight }) => {
  console.log(fitHeight)
  return (
    <Box
      display="flex"
      height={fitHeight ? '67vh' : null}
      flexDirection="column"
    >
      <Box>
        <LateralCardTop backgroundColor="#E62D20" />
      </Box>

      <Box overflow="auto" flexGrow={1} flexShrink={1}>
        <Typography>{fitHeight}</Typography>
        <LateralCardMiddle backgroundColor="#EA7067" />
      </Box>
      <Box height="20px">
        <LateralCardBottom backgroundColor="#E62D20" />
      </Box>
    </Box>
  )
}

export default LateralCard
