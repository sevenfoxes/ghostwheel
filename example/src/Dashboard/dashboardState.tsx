import { atom } from "recoil";
import { dashboard } from "./dashboard";

export const dashboardState = atom({
  key: 'dashboardState',
  default: dashboard as Page
});
