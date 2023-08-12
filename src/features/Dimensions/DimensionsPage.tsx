import { FC } from "react";
import { Container } from "primitives/Container";
import { H } from "primitives/H";
import { Page } from "primitives/Page"
import { Partner } from "./components/Partner";

export const DimensionsPage: FC<{}> = () => {
  return (
    <Page columns={'1fr 1fr'} sx={{ overflow: 'hidden' }}>
      <Partner partnerKey={1} partnerPartnerKey={2} />
      <Partner facing={'left'} partnerKey={2} partnerPartnerKey={1} />
    </Page>
  )
}
