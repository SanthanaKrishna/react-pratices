import React, { Component } from 'react'
import ClickCounter from './clickCounter';
import HoverCounter from './hoverCounter';
import User from './User';

export default class HOC extends Component {
  render() {
    return (
      <div>
        <ClickCounter parentName="santhana" />
        <HoverCounter />
        <User render={(isLoggedIn) => isLoggedIn ? 'Sandy' : 'Guest'} />
        {/* <Counter render={(count, incrementCount) => (
          <ClickCounter incrementCount=
            {incrementCount} count={count} />
        )} */}
        {/* <Counter>
          {(count, incrementCount)=>(
            <ClickCounter count={count} incrementCount={incrementCount}/>
          )}
        </Counter> */} 
        {/* => we can takes this as this.props.children in counter component
          this.props.children(count, incrementCount)
        */}
      </div>
    )
  }
}
