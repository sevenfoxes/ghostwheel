import { useRecoilValue } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { AppHeader } from "primitives/AppHeader";
import { themeSelector } from "./themeState";
import { LightSwitch } from "components/LightSwitch";
import { UserMenu } from "components/UserMenu";
import { FC } from "react";
import {styled} from "utils";
import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./features/Home";
import { NoMatch } from "./features/NoMatch";

interface AppProps {}

const Root:FC<Partial<AppProps>> = styled('div')(({ theme }) => ({
  background: theme.app.background,
  color: theme.app.color,
  height: 'inherit'
}))

const Layout: FC<any> = () => {
  return (
    <>
      <AppHeader>
        <LightSwitch />
        <UserMenu />
      </AppHeader>
      <Outlet />
    </>
  )
}

export const App:FC<AppProps> = () => {
  const theme = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Root>
    </ThemeProvider>
  );
};
