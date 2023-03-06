import {styled} from "utils";
import { FC, ReactNode } from "react";

export type PageProps = {
  chlidren: any;
}

const Root: any = styled('div')(({theme}) => ({
  padding: theme.app.padding
}));

export const Page: FC<PageProps> = (props) => {
  return (
    <Root {...props} />
  );
}
