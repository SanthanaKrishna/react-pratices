import React, { Component } from 'react'
import GoogleMap from './googleAPi/Maps/ZipcodeAPI';
import ChildernComp from './children/childrenComponent';

class App extends Component {
    render() {
        return (
            <div>
                {/* <GoogleMap/> */}
                <h1>I am parent Component</h1>
                <button>Parent</button>
                <ChildernComp key="santhana" data="childer">
                    <div>
                        <p>porps.childern render</p>
                    </div>
                </ChildernComp>
            </div>
        )
    }
}

export default App;