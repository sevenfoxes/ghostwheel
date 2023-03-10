import { Page } from "primitives/Page";
import { FC } from "react";
import { styled } from "utils";

const Message = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 30
}))

export const NoMatch: FC<{}> = () => {
  return (
    <Page>
      <Message>
        Page Not found
      </Message>
    </Page>
  )
}
