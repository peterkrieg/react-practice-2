import React, { Component } from 'react';
import Person from './Person';

class PeopleTable extends Component {
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
    return (
      <div>
        { this.renderPeople() }
      </div>
    );
  }
}

export default PeopleTable;
