import { atomFamily } from "recoil";

export interface RouterState {
  path: string;
  title: string;
}

export const routerState = atomFamily({
  key: 'routerState',
  default: { } as RouterState,
})
