import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./store";
import "./index.css";
import Home from "./Components/Home";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
