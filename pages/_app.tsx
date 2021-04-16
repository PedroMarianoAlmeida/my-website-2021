import { useState } from "react";

// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";

import theme from "./../src/lib/theme";

import CssBaseline from "@material-ui/core/CssBaseline";

import DrawerMenu from "../src/components/reusable/DrawerMenu/DrawerMenu";
import DrawerContent from "../src/components/specific/Drawer/DrawerContent";
import DrawerHeader from "./../src/components/specific/Drawer/DrawerHeader";
import { ThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }: AppProps) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerMenu
          main={<Component {...pageProps} />}
          header={<DrawerHeader />}
          menu={<DrawerContent />}
          open={openDrawer}
          setOpen={setOpenDrawer}
          drawerWidth={240}
        />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
