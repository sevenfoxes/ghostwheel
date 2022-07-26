import { RecoilRoot } from "recoil";
import { ThemeProvider } from "react-jss";
import { theme } from "../ghostwheel";
import { Routes } from "./Routes";
import { BrowserRouter } from "react-router-dom"

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};
