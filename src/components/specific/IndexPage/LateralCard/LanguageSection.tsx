import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import AvatarWithCaption from "../../../reusable/AvatarWithCaption";

const LanguageSection = () => {
  return (
    <Box my={1}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <AvatarWithCaption
          avatarAddress="/images/languages/uk_flag.png"
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
          caption={
            <>
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={fullStar} />
              <FontAwesomeIcon icon={fullStar} />
            </>
          }
        />
      </Grid>
    </Box>
  );
};

export default LanguageSection;
