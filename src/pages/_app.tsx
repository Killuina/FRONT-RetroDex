import "@fontsource/ibm-plex-mono";
import "@fontsource/vt323";
import { store } from "@/store/store";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import GlobalStyles from "../GlobalStyles";
import { defaultTheme } from "@/styles/chakraThemes/defaultTheme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title key="title">Pokédex</title>
        <meta name="description" content="A Pokédex CRUD App" />
      </Head>
      <Provider store={store}>
        <GlobalStyles />
        <ChakraProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
};

export default App;
