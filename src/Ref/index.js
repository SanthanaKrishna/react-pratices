import React, { Component } from 'react'
import RefsDemo from './RefDemo'
import ClassComponentRef from './classRef';

class Ref extends Component {
    render() {
        return (
            <div>
                <RefsDemo />
                <ClassComponentRef />
            </div>
        )
    }
}

export default Ref;
