import React, { Component } from 'react';
import Person from './Person';

class PeopleTable extends Component {
  render() {
    return (
      <div>
        <Person name='luke' />
        <Person name={'leia'} />
        <Person name={'han'} />
      </div>
    );
  }
}

export default PeopleTable;
