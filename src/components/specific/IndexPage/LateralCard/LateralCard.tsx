import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import ProfileSummary from './ProfileSummary'
import LanguageSection from './LanguageSection'

const LateralCard = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <ProfileSummary />

      <LanguageSection />

      <Box flexGrow={1} alignSelf="center">
        <Typography>Skills</Typography>
      </Box>

      <Typography>Social Network</Typography>
    </Box>
  )
}

export default LateralCard
