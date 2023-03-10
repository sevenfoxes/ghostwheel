import {styled} from "utils";
import { FC, ReactNode } from "react";

export type PageProps = {
  children: ReactNode;
}

const Root: any = styled('div')(({theme}) => ({
  display: 'grid',
  padding: theme.app.padding,
}));

export const Page: FC<PageProps> = (props) => {
  return (
    <Root {...props} />
  );
}
