import React, { Component } from 'react'
// import { Debounce } from './js/debounceAndthrottling';
import UseCallback from './Hooks/useCallback/index';
import MemoHook from './Hooks/useMemo';

class App extends Component {
    render() {
        return (
            <div>
                {/* <UseCallback /> */}
                <MemoHook />
            </div>
        )
    }
}

export default App;