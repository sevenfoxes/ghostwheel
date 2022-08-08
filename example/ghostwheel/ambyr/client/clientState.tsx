import { placeholderApi } from "../placeholder.service";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export interface ClientInterface {
  client?: Client;
  request?: Ambyr<Client[]>
}
export interface ClientsInterface {
  clients?: Client[];
  request?: Ambyr<Client[]>
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
  get: ({ get }) => {
    const request = get(clientApiState);
    return ({ request, clients: request.data }) as ClientsInterface;
  },
  set: ({ set }, { request }: ClientInterface) => {
    set(clientApiState, request)
    return request.data.map((client) => set(clientState(client.id), client))
  }
})

export const clientsSelector = selector({
  key: 'clientsSelector',
  get: ({ get }) => {
    const request = get(clientApiState);

    return ({ clients: request.data, request}) as ClientsInterface
  },
  set: ({ set }, { request }: ClientsInterface) => {
    set(clientApiState, request)
    request.data.map((client) => set(clientState(client.id), client))
  }
})

export const clientSelector = selectorFamily({
  key: 'clientSelector',
  get: (id) => ({ get }) => {
    const client = get(clientState(id));
    const request = get(clientApiState);

    return ({ request, client})}
})
