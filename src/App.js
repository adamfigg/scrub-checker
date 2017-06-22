import Reset from './Reset.css';
import React, { Component } from 'react';
import OWlogo from './OWlogo.svg';
import './App.css';
import EnterName from './Components/EnterName'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={OWlogo} className="Logo" alt="OWlogo" />
          <h2>Are you a scrub?</h2>
          <h3>Enter your username and platform of choice</h3>
         
        </div>
        <EnterName />

      </div>
    );
  }
}

export default App;
