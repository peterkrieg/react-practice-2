import React, { Component } from 'react';

export default class Person extends Component {
	render() {
		return (
			<li>{this.props.person.name}</li>
		);
	}
}
