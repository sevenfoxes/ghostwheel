import { atom } from "recoil";

export interface AppState {
  name: string;
}

export const appState = atom({
  key: 'appState',
  default: {
    name: 'ghostwheel'
  } as AppState
});
