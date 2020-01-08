import React, { useState } from 'react'

export function Debounce() {
    const [input, setInput] = useState('');
    let timerId;

    const handleDebounce = (event) => {
        setInput(event.target.value);
        debounceFunction(makeApiCall, 300)
    };

    // Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
    const debounceFunction = (func, delay) => {
        // Cancels the setTimeout method execution
        clearTimeout(timerId);
        console.log('pass clearTimeout');
        // Executes the func after delay time.
        timerId = setTimeout(func, delay)
        console.log('setTimeout get passed')
    }
    const makeApiCall = () => {
        fetch('https://api.mydomain.com')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleDebounce} />
        </div>
    )
}
