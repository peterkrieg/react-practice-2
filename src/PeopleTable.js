import React, { Component } from 'react';
import Person from './Person';

class PeopleTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      counter: 0,
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
  handleCounter() {
    this.setState({ counter: ++this.state.counter }, () => {
      console.log(this.state.counter);
    })
  }
  renderPeople() {
    console.log(this.state);
    const { people } = this.state;

    return people.filter(person => person.height > 50)
    .map((person, index) => {
      return <Person 
        onButtonClick={this.handleCounter.bind(this)} 
        key={index} 
        person={person}/>
    });
  }
  render() {
    console.log('render');
    return (
      <ul>
        {this.renderPeople()}
        <p>Counter: {this.state.counter}</p>
      </ul>
    );
  }
}

export default PeopleTable;
