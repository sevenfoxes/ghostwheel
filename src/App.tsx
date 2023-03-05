import { useRecoilValue } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { AppHeader } from "primitives/AppHeader";
import { themeSelector } from "./themeState";
import { LightSwitch } from "components/LightSwitch/LightSwitch";

export const App = () => {
  const theme = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <AppHeader>
        <LightSwitch />
      </AppHeader>
    </ThemeProvider>
  );
};
