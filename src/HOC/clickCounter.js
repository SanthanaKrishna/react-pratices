import React, { Component } from 'react'
import UpdatedComponent from './withCounter';

class ClickCounter extends Component {

  render() {
    const { name, count, incrementCount, parentName } = this.props;
    return <button onClick={incrementCount}> {parentName}   {name} Clicked {count} times</button>
  }
}

export default UpdatedComponent(ClickCounter, 5);
