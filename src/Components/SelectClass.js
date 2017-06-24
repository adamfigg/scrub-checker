// import React, { Component } from 'react';

// class SelectClass extends Component {

// 	checkedClasses = {
// 		"offense": false,
// 		"defense": false,
// 		"tank": false,
// 		"support": false
// 	};

// 	sendClassArray() {
// 		return this.checkedClasses;
// 	}

// 	toggleClass(className) {
// 		this.checkedClasses[className] = (this.checkedClasses[className]) ? false : true;
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<button className="btn btn-primary" onClick={() => {this.toggleClass('offense')}} >Offense</button>
// 				<button className="btn btn-primary" onClick={() => {this.toggleClass('defense')}} >Defense</button>
// 				<button className="btn btn-primary" onClick={() => {this.toggleClass('tank')}} >Tank</button>
// 				<button className="btn btn-primary" onClick={() => {this.toggleClass('support')}} >Support</button>
// 				<br />
// 				<button className='btn btn-primary' type="button">Lets Go</button>
// 			</div>
// 		);
// 	}
// }
// export default SelectClass