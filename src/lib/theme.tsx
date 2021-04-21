import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D52B1E",
    },
    secondary: {
      main: "#D7F75B",
    },
    error: {
      main: "#805D93",
    },
    background: {
      default: "#C3DFE0",
    },
  },
});

export default theme;
