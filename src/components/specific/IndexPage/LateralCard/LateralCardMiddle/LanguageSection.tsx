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
      >
        <AvatarWithCaption
          avatarAddress="/images/languages/uk_flag.png"
          alt="English Skill Medium"
          caption={
            <>
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={emptyStar} />
            </>
          }
        />

        <AvatarWithCaption
          avatarAddress="/images/languages/france_flag.png"
          alt="French Skill Basic"
          caption={
            <>
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={emptyStar} />
              <FontAwesomeIcon icon={emptyStar} />
            </>
          }
        />

        <AvatarWithCaption
          avatarAddress="/images/languages/brazil_flag.png"
          alt="Portuguese Skill Fluent"
          caption={
            <>
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={fullStar} />
            </>
          }
        />
      </Box>
    </Box>
  )
}

export default LanguageSection
