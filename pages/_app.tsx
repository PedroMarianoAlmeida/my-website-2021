import { useState } from "react";

// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";

import CssBaseline from "@material-ui/core/CssBaseline";

import DrawerMenu from "../src/components/reusable/DrawerMenu/DrawerMenu";
import DrawerContent from "../src/components/specific/Drawer/DrawerContent";
import DrawerHeader from "./../src/components/specific/Drawer/DrawerHeader";

function MyApp({ Component, pageProps }: AppProps) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <CssBaseline />
      <DrawerMenu
        main={<Component {...pageProps} />}
        header={<DrawerHeader setOpen={setOpenDrawer} />}
        menu={<DrawerContent />}
        open={openDrawer}
        setOpen={setOpenDrawer}
      />
    </>
  );
}

export default MyApp;
