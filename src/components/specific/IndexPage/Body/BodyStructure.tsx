import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import HeroSection from './HeroSection'
import WorkTypes from './WorkTypes'
import ActionButtons from './ActionButtons'

const BodyStructure = ({ desktopLayout }) => {
  return (
    <Box mb={desktopLayout ? 0 : 2} display="flex" flexDirection="column">
      <Grid container spacing={3}>
        <HeroSection />
        <WorkTypes />
        <ActionButtons />
      </Grid>
    </Box>
  )
}

export default BodyStructure
