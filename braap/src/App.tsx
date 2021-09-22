import React from "react";
import {Redirect, Route, Switch } from "react-router";
import "./App.css";

import  BraapFooter from "./stories/BraapComponents/Footer/BraapFooter";
import  { HomePage } from "./stories/BraapComponents/Pages/HomePage";
import  {  kawasakiPage } from "./stories/BraapComponents/Pages/kawasakiPage";
import    HondaPage  from "./stories/BraapComponents/Pages/hondaPage";


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={HomePage} />
        <Route path="/Motorbikes-Kawasaki" component={kawasakiPage} />
        <Route path="/Motorbikes-Honda" component={HondaPage} />
        <Route path="/Motorbikes-Yamaha" component={HomePage} />
        <Route path="/Motorbikes-Suzuki" component={HomePage} />
        <Route path="/AllMotorbikes" component={HomePage} />

      </Switch>
      <BraapFooter />
    </div>
  );
}

export default App;