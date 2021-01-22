import React, { Component } from 'react';
import './App.css';
import ScrollTop from "./components/ScrollTop"
import {Switch, Route} from "react-router-dom"

// Components
import Header from "./components/Header"
import Notfound from "./components/NotFound"
import Contact from "./components/Contact"
import Population from "./components/Population"
import Density from "./components/Density"
import landArea from "./components/LandArea"

class App extends Component {
  render() {
    return (
        <div>
        <Header />
        <Switch>
        <Route exact path="/" component={Population} />
        <Route path="/density" component={Density} />
        <Route path="/land-area" component={landArea} />
        <Route component={Notfound} />
      </Switch>
        <ScrollTop />
      </div> 
    );
  }
}

export default App;
