import './Reset.css';
import React, { Component } from 'react';

import ListCharacter from './Components/ListCharacter';

import OWlogo from './OWlogo.svg';

import './Bootstrap/css/bootstrap.min.css'
import './App.css';

// App is a Component, so it has all the things Component has.
class App extends Component {

  // Here we define 'App's constructor...
  constructor() {
    // ...and here we call 'Component's constructor. 
    super();

    // Here, we set the default state variables that we will mess with later
    this.state = {

      // In the state, we can store any variables we want to use elsewhere.
      // Here, we are storing our random hero id, which we will use to find
      // a random hero that we'll store in 'hero'
      randHeroID: null,
      hero: {},
      // This keeps track of the active buttons
      checkedClasses: {
        "offense": false,
        "defense": false,
        "tank": false,
        "support": false
      },

      // These state variables keep track of which buttons have the 'active' CSS class, so we can style them
      offActive: "",
      defActive: "",
      tanActive: "",
      supActive: "",
      isLoading: ''
    }
    // These allow us to use the 'this' keyword in our functions
    this.toggleClass = this.toggleClass.bind(this);
    this.search = this.search.bind(this);
    this.loadData = this.loadData.bind(this);
    this.startSpinner = this.startSpinner.bind(this);
  }

  // This keeps track of the hero IDs and their classes
  heroClasses = {
    "offense": [23, 4, 8, 11, 12, 15, 18],
    "defense": [5, 6, 2, 9, 19, 17],
    "tank": [3, 13, 14, 24, 20, 21],
    "support": [7, 10, 16, 22, 1]
  }

  // This will toggle the CSS class 'active' when a button is pressed
  toggleClass(event) {
    //store this.state.checkedClasses in a variable for easy reference
    var cc = this.state.checkedClasses;
    // this will toggle the active setting in the state
    cc[event.target.value] = (cc[event.target.value]) ? false : true;
    // this toggles the active class on the button
    switch (event.target.value) {
      case 'offense':
        if (this.state.offActive === "") {
          this.setState({
            offActive: " active"
          });
        } else {
          this.setState({
            offActive: ""
          });
        }
        break;
      case 'defense':
        if (this.state.defActive === "") {
          this.setState({
            defActive: " active"
          });
        } else {
          this.setState({
            defActive: ""
          });
        }
        break;
      case 'tank':
        if (this.state.tanActive === "") {
          this.setState({
            tanActive: " active"
          });
        } else {
          this.setState({
            tanActive: ""
          });
        }
        break;
      case 'support':
        if (this.state.supActive === "") {
          this.setState({
            supActive: " active"
          });
        } else {
          this.setState({
            supActive: ""
          });
        }
    }

    //this updates the checkedClasses variable in the state
    this.setState({
      checkedClasses: cc
    });
  }

  startSpinner() {  
  }

  isLoading() {
    if (this.state.isLoading == '') {
      this.setState({
        isLoading: ' loading'
      });
    } else {
      this.setState({
        isLoading: ''
      });
    }
  }

  search() {
    // We use a promise here to ensure that the filtered array is set before accessing the api
    const setFilters = new Promise((resolve, reject) => {
      // tape the bottom of the "filter" box
      var heros_filtered = [];
      // CRAZY loops here. Basically, for every hero class,
      for (var checkedClass in this.state.checkedClasses) {
        // if the button is active for that hero class,
        if (this.state.checkedClasses[checkedClass]) {
          // then we loop through each set of heros that are of those classes,
          for (var heroid in this.heroClasses[checkedClass]) {
            // and add each of those characters to the "filter" box we taped up earlier
            heros_filtered.push(this.heroClasses[checkedClass][heroid]);
          }
        }
      }

      // to see which hero ids are available after filtering, uncomment below
      // console.log("Filtered Heros' IDs:");
      // console.log(heros_filtered);
      // then we send the final box of characters out of the promise
      resolve(heros_filtered);
    });
    // Here we activate the promise, and catch the final box of characters
    setFilters.then((heros_filtered) => {
      // We then set the state variable to a random hero from that box
      const rand = Math.floor(Math.random() * heros_filtered.length) + 1
      this.setState({
        randHeroID: heros_filtered[rand]
      });

      // Then, we just double check to make sure we have a valid hero id,
      if (this.state.randHeroID != null && typeof this.state.randHeroID !== 'undefined') {
        // And we trigger loadData(), which will access the API and get our hero!
        this.isLoading();
        this.loadData();
      }
    });
  }

  loadData() {

    // Here we triple check that our hero ID is valid. If it's valid, we let the console know
    if (this.state.randHeroID != null && typeof this.state.randHeroID !== 'undefined') {
      console.log("Valid Hero ID");
      // access the API.
      fetch("https://overwatch-api.net/api/v1/hero/" + this.state.randHeroID)
        // save the response as a javascript object, or JSON then save the hero's information in our state variable "hero"
        .then(response => response.json())
        .then(json => {
          this.setState({
            hero: json
          });
          this.isLoading();
        });
    }
  }

  render() {
    return (
      <div className="App">
        <img src={OWlogo} className={"Logo" + this.state.isLoading} alt="OWlogo" />

        <h1>Calling all agents of Overwatch</h1>
        <h2>Which role does your team need?</h2>

        <button className={"btn btn-primary btn-overwatch" + this.state.offActive} onClick={this.toggleClass} value="offense">offense</button>
        <button className={"btn btn-primary btn-overwatch" + this.state.defActive} onClick={this.toggleClass} value="defense">defense</button>
        <button className={"btn btn-primary btn-overwatch" + this.state.tanActive} onClick={this.toggleClass} value="tank">tank</button>
        <button className={"btn btn-primary btn-overwatch" + this.state.supActive} onClick={this.toggleClass} value="support">support</button>
        <br />
        <br />
        <br />


        {/* Here we are saving our entire hero object that we got from the API in a props variable called 'hero'.
					We'll take this variable and display specific properties from it in ListCharacter.js */}
        <ListCharacter hero={this.state.hero} />

        <footer>
          {/* This is the button that activates the search() function defined above, which starts the chain */}
          <button className="btn btn-primary btn-overwatch-hero" onClick={this.search}>Give Me A Hero</button>
        </footer>
      </div>
    );
  }
}
export default App;