import { RecoilRoot } from "recoil";
import { ThemeProvider } from "react-jss";
import { theme, Router } from "../ghostwheel";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
};
