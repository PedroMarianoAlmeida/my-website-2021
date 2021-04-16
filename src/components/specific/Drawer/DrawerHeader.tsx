import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const DrawerHeader = () => {
  const classes = useStyles();

  return (
    <>
      <Typography align="center" variant="h4" noWrap className={classes.title}>
        Pedro Programmer
      </Typography>

      <ButtonGroup color="inherit" aria-label="outlined primary button group">
        <Button>ENG</Button>
        <Button>FR</Button>
        <Button>PT</Button>
      </ButtonGroup>
    </>
  );
};

export default DrawerHeader;
