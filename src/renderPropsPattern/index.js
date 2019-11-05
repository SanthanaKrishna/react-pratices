import React, { Component } from 'react'
import ClickCounterTwo from './clickCounterTwo'
import HoverCounterTow from './HoverCounter'
import User from './user';
import CounterContainer from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        {/* <ClickCounterTwo/>
        <HoverCounterTow/> */}
        {/* <User name={(isLoggedIn)=> isLoggedIn ? "Santhana" : "Gest User"} /> */}
        {/* <User render={(isLoggedIn)=> isLoggedIn ? "Santhana" : "Gest User"} /> */}
        <CounterContainer />
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
        <CounterContainer />

        
        <CounterContainer render={(count, incrementCount) => (
          <HoverCounterTow count={count} incrementCount={incrementCount} />
        )} />

      </div>
    )
  }
}

export default App;