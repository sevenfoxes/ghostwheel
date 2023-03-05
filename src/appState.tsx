import { atom } from "recoil";

export interface AppState {
  name: string;
}

export interface RoutesState {
  [name: string]: string;
}

export const appState = atom({
  key: 'appState',
  default: {
    name: 'ghostwheel',
  } as AppState
});

export const routesState = atom({
  key: 'routesState',
  default: {
    home: '/'
  } as RoutesState
});
