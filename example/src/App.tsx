import * as React from 'react';
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "react-jss";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { theme } from "../ghostwheel";
import { Dashboard } from "./Dashboard";

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/">
              <Dashboard />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
};
