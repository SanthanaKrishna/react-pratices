import React, { useState } from 'react'

export function Throttling() {
    const [input, setInput] = useState('');
    let timerId;

    // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds

    const throttlingFunction = (funcApi, delay) => {
        // If setTimeout is already scheduled, no need to do anything
        if (timerId) {
            return null;
        }
        // Schedule a setTimeout after delay seconds
        timerId = setTimeout(function () {
            funcApi();
            // Once setTimeout function execution is finished, timerId = undefined so that in <br>
            // the next scroll event function execution can be scheduled by the setTimeout
            timerId = undefined;
        }, delay)
    }
    const makeApiCall = () => {
        fetch('https://api.mydomain.com')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }
    const handleThrottling = (event) => {
        setInput(event.target.value);
        throttlingFunction(makeApiCall, 300)
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleThrottling} />
        </div>
    )
}
