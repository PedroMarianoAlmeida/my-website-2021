import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const DrawerHeader = ({ setOpen }) => {
  return (
    <>
      <Typography variant="h6" noWrap>
        Pedro Almeida
      </Typography>

      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        <Button>ENG</Button>
        <Button>FR</Button>
        <Button>PT</Button>
      </ButtonGroup>
    </>
  );
};

export default DrawerHeader;
