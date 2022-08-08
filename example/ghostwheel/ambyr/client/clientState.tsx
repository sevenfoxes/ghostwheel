import { placeholderApi } from "../placeholder.service";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { get  as aget} from '../engine'
import { isEmpty } from "lodash/fp";

export interface ClientInterface {
  client?: any;
  request?: any;
}
export interface ClientsInterface {
  clients?: any;
  request?: any
}

export const clientApiState = atom({
  key: 'clientApiState',
  default: {
    url: placeholderApi('users'),
    lastRetrieved: new Date(),
  } as Ambyr<Client[]>
});

export const clientState = atomFamily({
  key: 'clientState',
  default: {} as Client
});

export const clientApiSelector = selector({
  key: 'clientApiSelector',
  get: async ({ get }) => {
    const rState = get(clientApiState);
    const request = await aget(placeholderApi('users')) ;
    let clients = await request.json();

    return ({ request: isEmpty(rState) ? request : rState, clients  });
  },
  set: ({ set }, { request }: any) => {
    set(clientApiState, request)
    return request.data.map((client: Client) => set(clientState(client.id), client))
  }
})

export const clientsSelector = selector({
  key: 'clientsSelector',
  get: async ({ get }) => {
    const {request, clients} = await get(clientApiSelector);

    return ({ clients, request}) as ClientsInterface
  },
  set: ({ set }, { request }: ClientsInterface) => {
    set(clientApiState, request)
    request.data.map((client: Client) => set(clientState(client.id), client))
  }
})

export const clientSelector = selectorFamily({
  key: 'clientSelector',
  get: (id: number) => ({ get }) => {
    const client = get(clientsSelector).clients[id];
    const request = get(clientApiState);

    return ({ request, client})}
})
