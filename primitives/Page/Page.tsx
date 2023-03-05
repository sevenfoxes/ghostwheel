import styled from "@emotion/styled";
import { FC } from "react";

export type PageProps = {

}

const Root: any = styled('div')(() => ({

}));

export const Page: FC<PageProps> = (props) => {
  return (
    <Root {...props} />
  );
}
