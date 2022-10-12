import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import "./scss/res.scss";
import "./scss/Manager/manager.scss";
import "./scss/Manager/ManagerResponsive.scss";

import App from "./App";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
