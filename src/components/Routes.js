import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Game from "./Game";
import Welcome from "./Welcome";
import StudyListForm from "./StudyListForm";
import UserLogIn from "./UserLogIn";
import axios from "axios";

const Routes = () => {
  //const [payload, setPayload] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      axios
        .get(`http://localhost:3000/api/users/auto_login`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          //setPayload(response.data.payload);
          console.log(response.data);
          setUser(response.data.user);
        });
    }
  }, []);

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Welcome user={user} />} />
          <Route
            exact
            path="/study_lists/:study_list_id/game"
            render={(props) => <Game {...props} />}
          />
          <Route
            exact
            path="/study_lists/new"
            render={() => <StudyListForm user={user} />}
          />
          <Route
            exact
            path="/users/login"
            render={() => <UserLogIn user={user} setUser={setUser} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
