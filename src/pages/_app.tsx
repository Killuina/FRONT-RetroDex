import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import { store } from "../store/store";
import { mainTheme } from "../styles/mainTheme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title key="title">Pokédex</title>
        <meta name="description" content="A Pokédex CRUD App" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
