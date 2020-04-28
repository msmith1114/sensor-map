import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SensorContainer from '../Components/SensorContainer';
import SensorView from '../Components/SensorView';

const AppRouter = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <p>About Test</p>
        </Route>
        <Route path="/topics">
          <p>Topics Test</p>
        </Route>
        <Route path="/devices/:id" component={SensorView}/>
        <Route path="/" exact={true}>
          <SensorContainer />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
