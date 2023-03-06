import { useRecoilState } from "recoil";
import { themeSelector } from "src/themeState";
import { Toggle } from "primitives/Toggle";
import { Icon } from "primitives/Icon";
import { mdiLightbulbOnOutline, mdiLightbulbOutline } from "@mdi/js";


export const LightSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeSelector);
  const isLight = theme.name === 'light'

  const handleThemeChange = () => {
    isLight ? setTheme('dark') : setTheme('light')
  }

  return (
    <Toggle
      onLabel={<Icon path={mdiLightbulbOnOutline} />}
      offLabel={<Icon path={mdiLightbulbOutline} />}
      onClick={handleThemeChange}
      theme={'dark'}
      primitiveTheme={'outlined'}
      value={isLight}
    />
  );
};
