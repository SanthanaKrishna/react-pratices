import React, { Component } from 'react'
import GoogleMap from './googleAPi/Maps/ZipcodeAPI';
import ChildernComp from './children/childrenComponent';
import ReducerAndContext from './Hooks/reducerAndContext/index';

class App extends Component {
    render() {
        return (
            <div>
                <ReducerAndContext/>
            </div>
        )
    }
}

export default App;