import React from "react";
import ReactDOM from "react-dom";
import NyxTest from "./NyxTest";

const main = document.createElement("div");
const body = document.querySelector("body");
body && body.appendChild(main);
ReactDOM.render(<NyxTest />, main);
