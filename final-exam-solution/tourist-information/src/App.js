import db from './firebase/db'; // eslint-disable-line no-unused-vars
// ↑↑↑ A FENTI SOR(OKA)T NE MÓDOSÍTSD ↑↑↑
import './App.scss';
import React from "react";
import Attractions from "./Attractions";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddAttraction from './AddAttraction';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Attractions />
        </Route>
        <Route path="/attractions/new">
          <AddAttraction />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
