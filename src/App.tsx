import { useRecoilValue } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { AppHeader } from "primitives/AppHeader";
import { Link } from "primitives/Link";
import { themeSelector } from "./themeState";
import { LightSwitch } from "components/LightSwitch";
import { UserMenu } from "components/UserMenu";
import { FC } from "react";
import {styled} from "utils";
import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./features/Home";
import { NoMatch } from "./features/NoMatch";
import { SearchPage } from "./features/Search";
import { DimensionsPage } from "./features/Dimensions";

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
        <Link to={"/search"}>search</Link>
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
              <Route path="/search" element={<SearchPage />} />
              <Route path="/dimensions" element={<DimensionsPage />} />
              <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Root>
    </ThemeProvider>
  );
};
