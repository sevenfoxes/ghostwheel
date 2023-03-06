import { useRecoilValue } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { AppHeader } from "primitives/AppHeader";
import { themeSelector } from "./themeState";
import { LightSwitch } from "components/LightSwitch";
import { UserMenu } from "components/UserMenu";
import { FC } from "react";
import {styled} from "utils";

interface AppProps {}

const Root:FC<Partial<AppProps>> = styled('div')(({ theme }) => ({
  ...theme.app,
  height: 'inherit'
}))

export const App:FC<AppProps> = () => {
  const theme = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <AppHeader>
          <LightSwitch />
          <UserMenu />
        </AppHeader>
      </Root>
    </ThemeProvider>
  );
};
