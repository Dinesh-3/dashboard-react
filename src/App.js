import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import Header from "./components/Header"
import ScrollTop from "./components/ScrollTop"

class App extends Component {
  render() {
    return (
        <div>
        <Header />
        <Chart />
        <ScrollTop />
      </div> 
    );
  }
}

export default App;
