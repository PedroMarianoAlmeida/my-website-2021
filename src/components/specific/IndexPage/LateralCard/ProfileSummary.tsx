import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Summary = () => {
  const classes = useStyles();

  return (
    <Box my={1}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Avatar
          alt="Remy Sharp"
          src="/images/profile.jpeg"
          className={classes.large}
        />
      </Grid>
      <Typography align="center">Pedro Almeida</Typography>
      <Typography align="center">Frontend Developer</Typography>
    </Box>
  );
};

export default Summary;
