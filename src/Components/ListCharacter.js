import React, { Component } from 'react';
// ListCharacter is a function so pass props can into it, which contains our 'hero' variable
export default function ListCharacter(props) {
	// Duct tape for parenthases...these break it and don't know why
	var realname = props.hero.real_name;
	// So we double check to make sure it's not undefined,
	if (typeof props.hero.real_name != 'undefined') {
		// and then add the parenthases.
		realname = "( " + props.hero.real_name + " )";
	}
	return (
		<div id="heroDiv">
			<h1>{props.hero.name}</h1>
			<h3>{realname}</h3>
			<h4>{props.hero.description}</h4>
		</div>
	);
}