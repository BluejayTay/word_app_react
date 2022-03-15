import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Game from "./Game";
import Welcome from "./Welcome";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Welcome />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
