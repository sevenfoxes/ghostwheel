import { FC } from "react";
import { Container } from "primitives/Container";
import { H } from "primitives/H";
import { Page } from "primitives/Page"
import { Partner } from "./components/Partner";

export const DimensionsPage: FC<{}> = () => {
  return (
    <Page columns={'1fr 1fr'}>
      <Partner />
      <Partner />
    </Page>
  )
}
