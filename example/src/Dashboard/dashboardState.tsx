import { Page } from "../../ghostwheel";
import { atom } from "recoil";

export const dashboardState = atom({
  key: 'dashboardState',
  default: {
    path: '/',
    title: 'home'
  } as Page
})
