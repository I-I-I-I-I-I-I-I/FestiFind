import './App.css';
import React, {Component} from "react";
import Cardlist from './Cardlist.js';
import Navbar from "./Navbar";

class App extends Component{
  render(){
    return (
      <div className="app">
        <Navbar/>
        <Cardlist/>
      </div>

    );
  }
}

export default App;
