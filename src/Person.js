import React, { Component } from 'react';

export default class Person extends Component {
	render() {
		return (
			<div className="person">
				<p>here is their name: {this.props.name}</p>
			</div>
		);
	}
}
