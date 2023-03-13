import type { AppProps } from "next/app";
import Head from "next/head";
import { IBM_Plex_Mono, VT323 } from "next/font/google";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import GlobalStyles from "../GlobalStyles";
import { store } from "../store/store";
import { mainTheme } from "../styles/mainTheme";

export const mainFont = VT323({ subsets: ["latin"], weight: "400" });

export const secondaryFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
});

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title key="title">Pokédex</title>
        <meta name="description" content="A Pokédex CRUD App" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <ProtectedRoute router={router}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ProtectedRoute>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
