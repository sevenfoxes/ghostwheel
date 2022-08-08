import { atom } from "recoil";

export const aboutState = atom({
  key: 'aboutState',
  default: {
    path: '/about',
    title: 'about'
  } as Page
})
