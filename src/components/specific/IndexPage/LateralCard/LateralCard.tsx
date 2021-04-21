import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import ProfileSummary from './ProfileSummary'
import LanguageSection from './LanguageSection'
import SocialMediaSection from './SocialMediaSection'

const LateralCard = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <ProfileSummary />

      <LanguageSection />

      <Box flexGrow={1} alignSelf="center">
        <Typography>Skills</Typography>
      </Box>

      <SocialMediaSection />
    </Box>
  )
}

export default LateralCard
