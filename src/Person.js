import React, { Component } from 'react';

const list = {
	listStyleType: 'none',
	width: 100,
	height: 200,
	border: '1px solid black',
	float: 'left',
	marginRight: 50,
}

export default class Person extends Component {
	handleClick() {
		this.props.onButtonClick();
	}
	render() {
		const { name, height, gender, eye_color } = this.props.person;
		return (
			<li style={list}>
				<h4>{name}</h4>
				<p>height: {height}</p>
				<input 
					type="button" 
					className="button" 
					onClick={this.handleClick.bind(this)} 
				/>Button
			</li>
		);
	}
}
