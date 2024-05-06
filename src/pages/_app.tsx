import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import { store } from "../store/store";
import { mainTheme } from "../styles/mainTheme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title key="title">RetroDex</title>
        <meta
          name="description"
          content="A Pokédex CRUD App with retro pixel style"
        />
        <link
          rel="preconnect"
          href={`${process.env.NEXT_PUBLIC_URL_API}`}
        ></link>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
