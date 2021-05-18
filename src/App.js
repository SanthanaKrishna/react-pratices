import React, { Component } from 'react'
import UseCallback from './Hooks/useCallback/index';
import MemoHook from './Hooks/useMemo';
import Checkbox1 from './project/Checkbox/Checkbox1';
import MainExport from './project/ExportExcel';

import './App.css';
import { Radio } from './project/Radio';

class App extends Component {
    render() {
        return (
            <div className="">
                <Radio />
            </div>
        )
    }
}

export default App;