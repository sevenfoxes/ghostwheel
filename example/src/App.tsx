import { RecoilRoot } from "recoil";
import { ThemeProvider } from "react-jss";
import { theme, Router } from "../ghostwheel";
import { Routes } from "./Routes";
import { Header } from "../ghostwheel";

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes />
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
};
