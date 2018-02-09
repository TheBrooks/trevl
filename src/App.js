import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <p className="App-intro">Lets make this Trevl application!</p>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
