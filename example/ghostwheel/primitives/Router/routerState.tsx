import { atom, atomFamily, selectorFamily } from "recoil";

export interface RouterState {
  path: string;
  title: string;
}

export const routerState = atomFamily({
  key: 'routerState',
  default: { } as RouterState,
})

export const routesState = atom({
  key: 'routesState',
  default: []
})

export const routesSelector = selectorFamily({
  key: 'routesSelector',
  get: k => ({ get }) => get(routerState(k)),
  set: k => ({ set, get }, r) => {
    set(routerState(k), r)
    set(routesState, [...get(routesState), r])
  }
})
