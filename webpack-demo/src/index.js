import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./ts.main";
import "./styles/main.css";
import "./styles/sass/header.scss";

console.log("hello webpack");

var u = () => 2 * 3;

console.log(u());

ReactDOM.render(<App />, document.getElementById("app"));
