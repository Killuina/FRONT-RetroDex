import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import GlobalStyles from "../GlobalStyles";
import { store } from "../store/store";
import { mainTheme } from "../styles/mainTheme";

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
            <Component {...pageProps} />
          </ProtectedRoute>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
