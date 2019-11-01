import React, { Component } from 'react'
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {

  render() {
    const { name, count, incrementCount } = this.props;
    return <p onMouseOver={incrementCount}> {name} Clicked {count} times</p>
  }
}

export default UpdatedComponent(HoverCounter, 10);
 