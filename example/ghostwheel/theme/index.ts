import { brightGreen, colors } from './colors';

export * from './colors';
export * from './fonts';

// style variables
export const siteMaxWidth = 1300;
export const baseMargin = "1rem";

export const variables = {
  cellPadding: ".1rem .8rem",
  siteMargin: "1rem",
  siteMaxWidth,
  baseMargin,
  wrapper: {
    display: "grid",
    margin: "0 auto",
    gridTemplateColumns: "1fr max-content",
    paddingLeft: `calc(env(safe-area-inset-left) + ${baseMargin})`,
    paddingRight: `calc(env(safe-area-inset-right) + ${baseMargin})`,
    width: "100%",
  },
};

export const toast = {
  errorColor: colors.error,
  warnColor: colors.warning,
  msgColor: colors.ok,
  delay: 2000,
  offset: 16,
};

export const card = {
  root: {},
  header: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "1fr",
    alignItems: "center",
    padding: ['.5rem', '1rem'],
    textTransform: 'capitalize'
  },
  title: {
    color: brightGreen,
    fontWeight: "normal",
    fontSize: 20,
    margin: 0,
    padding: 0,
  },
  t: {
    display: "inline-block",
  },
}
