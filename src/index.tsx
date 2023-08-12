import { createRoot } from "react-dom/client";
import { App } from "./App";
import { RecoilRoot } from "recoil";

const wrapper = createRoot(document.getElementById("root"));
wrapper.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
