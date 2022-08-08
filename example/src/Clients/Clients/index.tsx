import { useClients, Page } from "../../../ghostwheel";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Client } from "../Client";
import { clientsRouteState } from "../clientsRouteState";

export interface ClientsProps {};

export const Clients: FC<ClientsProps> = () => {
  const r = useRecoilValue(clientsRouteState);
  const clients = useClients();

  return (
    <Page title={r.title}>
      <ul>
        {!!clients?.length && clients.map((client: Client, i: number) => <Client key={i} {...client} />)}
      </ul>
    </Page>
  )
}
