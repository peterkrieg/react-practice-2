import React, { Component } from 'react';

class About extends Component {
	render() {
		return(
			<div>
				<p>This is the about page!!</p>
				{this.props.children}
			</div>
		);
	}
}


export default About;