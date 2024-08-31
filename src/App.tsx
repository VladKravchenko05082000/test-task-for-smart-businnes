import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "store/store";

import useScrollToTop from "hooks/use-scroll-to-top";

import MainPage from "page";
import { ThemeContextProvider } from "context";
import { ErrorBoundary } from "components";

import { theme } from "./theme";

import { GlobalStyles } from "./styles";

const App: React.FC = () => {
  useScrollToTop();
  return (
    <ThemeContextProvider>
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />

            <MainPage />
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </ThemeContextProvider>
  );
};

export default App;
