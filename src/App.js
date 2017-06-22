import './Reset.css';
import React, { Component } from 'react';
import OWlogo from './OWlogo.svg';
import './App.css';
import SelectClass from './Components/SelectClass';
import ListCharacter from './Components/ListCharacter';
// import ListClass from './Components/ListClass';

class App extends Component {
  constructor(){
    super();

    this.state = {
      hero: {},
      attack: false,
      defense: false,
      tank: false,
      support: false
    }
  }

  loadData() {
    const random = Math.floor(Math.random() * 24) + 1;
    fetch("https://overwatch-api.net/api/v1/hero/" + random)  //This is retrieving the information from that URL
        .then(response => response.json())   //This transforms the response into Json (a javascript object)
        .then(json => {
            // herosArr.push(json);
            console.log("response", json)
            this.setState({
                hero: json
            });
        });
  }

  // handleCheckbox() {}


  componentDidMount() {
        this.loadData();    //This is ensuring the data then displays only after that entire process has been completed
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={OWlogo} className="Logo" alt="OWlogo" />
          
          <h1>Calling all agents of Overwatch</h1>
          <h2>Which role does your team need?</h2>
         
        </div>
        <SelectClass handleCheckbox={this.handleCheckbox}/>

              {/*I NEED TO ADD IN A ON CLICK BUTTON TO SPIT OUT A CHARACTER FROM THE SELECETED CLASSES*/}

               
        <ListCharacter 
          hero={this.state.hero.name}
        />
        
      </div>
    );
  }
}

export default App;
