import styled from '@emotion/styled';
import { FC } from "react";
import { Page } from "primitives/Page";

export type SearchPageProps = {

}

const Root: any = styled('div')(({ theme }) => ({
}));

export const SearchPage: FC<SearchPageProps> = (props) => {
  return (
    <Page {...props}>
      hi from search
    </Page>
  );
}
