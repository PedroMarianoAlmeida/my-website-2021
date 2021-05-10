import Box from '@material-ui/core/Box'

import HeroSection from './HeroSection'
import WorkTypes from './WorkTypes'
import ActionButtons from './ActionButtons'

const BodyStructure = ({ desktopLayout }) => {
  return (
    <Box
      mb={desktopLayout ? 0 : 2}
      px={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="100%"
    >
      <HeroSection desktopLayout={desktopLayout} />
      <WorkTypes desktopLayout={desktopLayout} />
      <ActionButtons />
    </Box>
  )
}

export default BodyStructure
