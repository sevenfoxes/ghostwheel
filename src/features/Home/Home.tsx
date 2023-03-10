import { FC } from "react";
import { Container } from "primitives/Container";
import { H } from "primitives/H";
import { Page } from "primitives/Page"

export const Home: FC<{}> = () => {
  return (
    <Page>
      <Container>
        <H sx={{ marginTop: 0 }}>Welcome</H>
        lorem ipsum dolor sit amet
      </Container>
    </Page>
  )
}
