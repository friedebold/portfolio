import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DataWrapper from "./DataWrapper";
import "./index.css";
import {
  default as ExperiencePage,
  default as FormalEducation
} from "./pages/ExperiencePage";
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
                    component={() => (
                      <ExperiencePage
                        title="๐งช Projects"
                        data={profileData.projects}
                      />
                    )}
                  />
                  <Route
                    path="/workExperience"
                    exact
                    component={() => (
                      <ExperiencePage
                        title="๐จ๐ผโ๐ป Work Experience"
                        data={profileData.workExperience}
                      />
                    )}
                  />
                  <Route
                    path="/formalEducation"
                    exact
                    component={() => (
                      <FormalEducation
                        title="๐ Formal Education"
                        data={profileData.formalEducation}
                      />
                    )}
                  />
                  <Route
                    path="/"
                    component={() => <HomePage {...{ profileData }} />}
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
