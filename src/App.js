import React, { Component } from 'react'
import { Debounce } from './js/debounceAndthrottling/Debounce';
import UseCallback from './Hooks/useCallback/index';
import MemoHook from './Hooks/useMemo';

class App extends Component {
    render() {
        return (
            <div>
                <Debounce />
            </div>
        )
    }
}

export default App;