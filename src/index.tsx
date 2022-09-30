import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DataWrapper from "./DataWrapper";
import "./index.css";
import Business from "./pages/Business";
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
                        title="🧪 Projects"
                        data={profileData.projects}
                      />
                    )}
                  />
                  <Route
                    path="/workExperience"
                    exact
                    component={() => (
                      <ExperiencePage
                        title="👨🏼‍💻 Work Experience"
                        data={profileData.workExperience}
                      />
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
                    path="/987c3ab4-9a05-408e-b87b-8e1bd8c0bc50"
                    component={() => <Business />}
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
