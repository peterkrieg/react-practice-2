import React, { Component } from 'react';
import Person from './Person';

class PeopleTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    }
  }
  componentDidMount() {
    console.log('component did mount');

    fetch('http://swapi.co/api/people/')
    .then(response => response.json())
    .then(people => {
      people = people.results;
      this.setState({ people });
    });
  }
  renderPeople() {
    console.log(this.state);
    return;
    return this.state.people.map(person => <li>{person.name}</li>);
  }
  render() {
    console.log('render');
    return (
      <ul>
        {this.renderPeople()}
      </ul>
    );
  }
}

export default PeopleTable;
