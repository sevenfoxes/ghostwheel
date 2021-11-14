import { Styles, createUseStyles } from "react-jss";
export const makeStyles =
  (s: Styles , name: string) => createUseStyles(s, { name });
