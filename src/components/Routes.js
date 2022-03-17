import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import GameForm from "./GameForm";
import Welcome from "./Welcome";
import StudyListIndex from "./StudyListIndex";

const Routes = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/study_lists" render={() => <StudyListIndex />} />
          <Route exact path="/game" render={() => <GameForm />} />
          <Route exact path="/" render={() => <Welcome />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
