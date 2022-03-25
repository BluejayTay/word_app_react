import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Game from "./Game";
import Welcome from "./Welcome";
import StudyListForm from "./StudyListForm";

const Routes = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Welcome />} />
          <Route
            exact
            path="/study_lists/:study_list_id/game"
            render={(props) => <Game {...props} />}
          />
          <Route
            exact
            path="/study_lists/new"
            render={() => <StudyListForm />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
