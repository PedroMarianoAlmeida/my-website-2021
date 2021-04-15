// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";

import CssBaseline from "@material-ui/core/CssBaseline";

import DrawerMenu from "../components/DrawerMenu/DrawerMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <DrawerMenu main={<Component {...pageProps} />} />
    </>
  );
}

export default MyApp;
