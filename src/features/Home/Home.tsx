import { Container } from "primitives/Container";
import { Page } from "primitives/Page"
import { FC } from "react";

export const Home: FC<{}> = () => {
  return (
    <Page>
      <Container>
        <h1>Welcome</h1>
        lorem ipsum dolor sit amet
      </Container>
    </Page>
  )
}
