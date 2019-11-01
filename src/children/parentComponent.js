import React, { Component } from 'react'
import ChildernComponent from './children/childrenComponent';

class ParentComponent extends Component {
    render() {
        return (
            <div>
                {/* <GoogleMap/> */}
                <h1>I am parent Component</h1>
                <button>Parent</button>
                <ChildernComponent key="santhana" data="childer">
                    <div>
                        <p>porps.childern render</p>
                    </div>
                </ChildernComponent>
            </div>
        )
    }
}

export default ParentComponent;