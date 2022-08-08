import { clients } from './clients'
import { atom } from "recoil";

export const clientsRouteState = atom({
  key: 'clientsRouteState',
  default: clients
})
