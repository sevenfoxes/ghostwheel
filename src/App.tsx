import { useRecoilState } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { Header } from "primitives/Header";
import { Button } from "primitives/Button";
import { themeSelector } from "./themeState";

export const App = () => {
  const [theme, setTheme] = useRecoilState(themeSelector);

  const handleThemeChange = () => {
    setTheme('dark')
  }

  return (
    <ThemeProvider theme={theme}>
        <Header>
          <Button onClick={handleThemeChange}>Do a barrel roll</Button>
        </Header>
      </ThemeProvider>
  );
};
