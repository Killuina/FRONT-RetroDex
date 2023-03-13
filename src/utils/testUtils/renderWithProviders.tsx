import { PreloadedState } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import GlobalStyles from "../../GlobalStyles";
import { RootState, setupStore, store } from "../../store/store";
import { mainTheme } from "../../styles/mainTheme";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    const router = useRouter();
    return (
      <ThemeProvider theme={mainTheme}>
        <Provider store={testStore}>
          <GlobalStyles />
          <ProtectedRoute router={router}>{children}</ProtectedRoute>
        </Provider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
