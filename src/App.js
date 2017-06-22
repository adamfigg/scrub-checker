import './Reset.css';
import React, { Component } from 'react';
import OWlogo from './OWlogo.svg';
import './App.css';
import SelectClass from './Components/SelectClass';
import ListCharacter from './Components/ListCharacter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={OWlogo} className="Logo" alt="OWlogo" />
          
          <h1>Calling all agents of Overwatch</h1>
          <h2>Which role does your team need?</h2>
         
        </div>
        <SelectClass />
        <ListCharacter />
      </div>
    );
  }
}

export default App;
