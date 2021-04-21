import Box from '@material-ui/core/Box'

import ProfileSummary from './ProfileSummary'
import LanguageSection from './LanguageSection'
import SocialMediaSection from './SocialMediaSection'
import SkillSection from './SkillSection'

const LateralCard = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <ProfileSummary />
      <LanguageSection />
      <SkillSection />
      <SocialMediaSection />
    </Box>
  )
}

export default LateralCard
