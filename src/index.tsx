import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DataWrapper from "./DataWrapper";
import "./index.css";
import FormalEducation from "./pages/FormalEducation";
import HomePage from "./pages/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <div className="page">
        <DataWrapper>
          {(profileData) => {
            return (
              <BrowserRouter>
                <Switch>
                  <Route
                    path="/projects"
                    exact
                    component={() => <h2>Coming soon...</h2>}
                  />
                  <Route
                    path="/workExperience"
                    exact
                    component={() => (
                      <h2>Coming soon...</h2>
                      /*   <FormalEducation
                        title="👨🏼‍💻 Work Experience"
                        data={profileData.workExperience}
                      /> */
                    )}
                  />
                  <Route
                    path="/formalEducation"
                    exact
                    component={() => (
                      <FormalEducation
                        title="📚 Formal Education"
                        data={profileData.formalEducation}
                      />
                    )}
                  />
                  <Route
                    path="/"
                    component={(props: any) => (
                      <HomePage {...{ profileData }} navigation={props} />
                    )}
                  />
                </Switch>
              </BrowserRouter>
            );
          }}
        </DataWrapper>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
