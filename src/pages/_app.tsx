import { store } from "@/store/store";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title key="title">Pokédex</title>
        <meta name="description" content="A Pokédex CRUD App" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
