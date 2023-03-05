import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@emotion/react";

import * as theme from "./theme";
import { Header } from "primitives/Header";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Header>
Things in a header
        </Header>
      </RecoilRoot>
      </ThemeProvider>
  );
};
