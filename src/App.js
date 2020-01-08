import React, { Component } from 'react'
// import { Debounce } from './js/debounceAndthrottling';
import CustomHook from './Hooks/CustomHooks/DocumentTitle/index';
class App extends Component {
    render() {
        return (
            <div>
                <CustomHook />
            </div>
        )
    }
}

export default App;