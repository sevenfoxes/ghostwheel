import { atom, selector, selectorFamily } from "recoil";

// project specific colors
const black = "#2b2b2b";
const red = "#de3636";
const blue = "#3c62a3";
const orange = "#ed8b00";
const white = "#fff";
const colors = {
  main: blue,
  mainText: white,
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

const light = {
  name: 'light',
  colors,
  fonts,
  input: {
    default: {
      background: colors.main,
      borderWidth: 0,
      g: 2
    },
    outlined: {
      g: 2,
      borderColor: colors.main,
      borderWidth: 2
    }
  },
  app: {
    background: colors.white,
    maxWidth: 1300,
    margin: "1rem",
    padding: "1rem"
  },
  logo: {
    fill: colors.main
  },
  toggle: {
    size: 25,
  },
  iconButton: {
    height: 24
  }
}

const dark = {
  ...light,
  app: {
    ...light.app,
    background: colors.black,
    color: colors.white
  },
  name: 'dark',
  colors: {
    ...light.colors,
    mainText: colors.white
  },
  input: {
    g: 2,
    default: {
      background: colors.white,
    },
    outlined: {
      borderWidth: 2,
      borderColor: colors.white,
    }
  },
  logo: {
    fill: colors.white
  }
}

// put these in an atom and apply
export const themesState = atom({
  key: 'themesState',
  default: {
    light,
    dark
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

export const themeOverrideSelector = selectorFamily({
  key: 'themeOverrideSelector',
  get: (key: string) => ({ get }): Theme => {

    return get(themesState)[key]
  },
});

