import ReactDOM from "react-dom";
import { App } from "./App";
import { RecoilRoot } from "recoil";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render((
  <RecoilRoot>
    <App />
  </RecoilRoot>
), wrapper) : false;
