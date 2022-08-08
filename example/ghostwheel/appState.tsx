import { atom } from "recoil";

export const appState = atom({
  key: 'appState',
  default: {
    name: 'Ghostwheel',
    baseUrl: 'http://localhost:8080/'
  }
})
