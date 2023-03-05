import { useRecoilState } from "recoil";
import { themeSelector } from "src/themeState";
import { Toggle } from "primitives/Toggle";

export const LightSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeSelector);
  const isLight = theme.name === 'light'

  const handleThemeChange = () => {
    isLight ? setTheme('dark') : setTheme('light')
  }

  return (
    <Toggle
      onClick={handleThemeChange}
      theme={'dark'}
      primitiveTheme={'outlined'}
      value={isLight}
    />
  );
};
