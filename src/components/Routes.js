import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { API_ROOT } from "../apiRoot";
import axios from "axios";
import Nav from "./Nav";
import Game from "./Game/Game";
import Welcome from "./Welcome/Welcome";
import StudyListForm from "./StudyLists/StudyListForm";
import UserLogIn from "./User/UserLogIn";

const Routes = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("auth_token");
    if (token) {
      axios
        .get(`${API_ROOT}api/users/auto_login`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUser(response.data.user);
        })
        .catch((error) => {
          console.log(error);
          setUser({});
          sessionStorage.clear();
        });
    }
  }, []);

  return (
    <div>
      <Router>
        <Nav user={user} setUser={setUser} />
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
            render={() => <UserLogIn setUser={setUser} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
