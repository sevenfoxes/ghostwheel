import { atom, atomFamily } from "recoil";
import { routes } from "../../../src/routes";


export const routerState = atomFamily({
  key: 'routerState',
  default: { } as RouterState,
})

export const routesState = atom({
  key: 'routesState',
  default: routes
})
