import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ProfileSummary from "./ProfileSummary";
import LanguageSecction from "./LanguageSection";

const LateralCard = () => {
  return (
    <Paper>
      <Grid container spacing={1}>
        <Grid xs={12}>
          <ProfileSummary />
        </Grid>

        <Grid xs={12}>
          <LanguageSecction />
        </Grid>
        <Grid xs={12}>Skils</Grid>
        <Grid xs={12}>Social Network</Grid>
      </Grid>
    </Paper>
  );
};

export default LateralCard;
