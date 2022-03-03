import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <BrowserRouter>
        <Switch>
       {/*    <Route path="/analytics" exact component={Analytics} /> */}
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
