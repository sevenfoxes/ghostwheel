import { atom, selector } from "recoil";

// project specific colors
const black = "#2b2b2b";
const red = "#de3636";
const blue = "#3c62a3";
const orange = "#ed8b00";
const white = "#fff";
const colors = {
  main: blue,
  accept: "#3db14c",
  warn: red,
  error: red,
  warning: "yellow",
  ok: blue,
  blue,
  black,
  red,
  orange,
  white
};

// fonts
const sansSerif = "sans-serif";
const robotoFont = `'Roboto', ${sansSerif}`;

const fonts = {
  sansSerifFont: robotoFont,
};

const variables = {
  site: {
    maxWidth: 1300
  },
  defaultMargin: "1rem",
  defaultPadding: "1rem",
};

const light = {
  colors,
  fonts,
  variables
}

// put these in an atom and apply
export const themesState = atom({
  key: 'themesState',
  default: {
    light,
    dark: {
      ...light,
      colors: {
        main: colors.black
      }
    }
  } as Themes
});

export const activeThemeState = atom({
  key: 'activeThemeState',
  default: 'light'
})

export const themeSelector = selector({
  key: 'themesSelector',
  get: ({ get }): Theme => {
    const theme = get(activeThemeState);

    return get(themesState)[theme]
  },
  set: ({ set }, newTheme: any) => set(activeThemeState, newTheme)
});

