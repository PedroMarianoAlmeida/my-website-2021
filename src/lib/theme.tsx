import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D52B1E",
    },
    secondary: {
      main: "#EAD94C",
    },
    error: {
      main: "#39393A",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
