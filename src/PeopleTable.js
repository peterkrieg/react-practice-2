import React, { Component } from 'react';
import Person from './Person';

class PeopleTable extends Component {
  componentDidMount() {
    console.log('component did mount');
  }
  renderPeople() {
    return (
      <div>
        <Person name='luke' />
        <Person name={'leia'} />
        <Person name={'han'} />
      </div>
    );
  }
  render() {
    console.log('render');
    return (
      <div>
        { this.renderPeople() }
      </div>
    );
  }
}

export default PeopleTable;
