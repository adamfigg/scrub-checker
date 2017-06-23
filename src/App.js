import './Reset.css';
import React, { Component } from 'react';
import OWlogo from './OWlogo.svg';
import './App.css';
import SelectClass from './Components/SelectClass';
import ListCharacter from './Components/ListCharacter';
import LetsGo from './Components/LetsGo';
import Reroll from './Components/Reroll';

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
        <div>
        <LetsGo className='Button'/>
        </div>  
        <ListCharacter />    
         {/*This was here before and I dont know if I will need this later .... :)  hero={this.state.hero.name}*/}
         
        <Reroll />
        
      </div>
    );
  }
}

export default App;
