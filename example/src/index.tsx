import * as React from 'react';
import { render } from "react-dom";
import { App } from "./App";

const wrapper = document.getElementById("root");
wrapper ? render(<App />, wrapper) : false;
