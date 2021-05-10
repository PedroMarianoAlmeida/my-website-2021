import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

import AvatarWithCaption from '../../../../reusable/AvatarWithCaption'

const LanguageSection = () => {
  return (
    <Box py={2}>
      <Typography variant="h6" align="center">
        Language Skills
      </Typography>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        pt={1}
        flexWrap="wrap"
      >
        <AvatarWithCaption
          avatarAddress="/images/languages/UK Flag.png"
          alt="English Skill Medium"
          caption={
            <Box display="flex" justifyContent="space-between" mt={1}>
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={emptyStar} />
            </Box>
          }
        />

        <AvatarWithCaption
          avatarAddress="/images/languages/Flag_of_Portugal.svg.png"
          alt="Portuguese Skill Fluent"
          caption={
            <Box display="flex" justifyContent="space-between" mt={1}>
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={fullStar} />
            </Box>
          }
        />
      </Box>
    </Box>
  )
}

export default LanguageSection
