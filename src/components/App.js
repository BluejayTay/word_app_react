import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Game from "./Game";
//import GameForm from "./GameForm";
import Welcome from "./Welcome";
import Nav from "./Nav";
//import StudyListIndex from "./StudyListIndex";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
