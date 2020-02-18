import React, { useState, useMemo, useCallback, useEffect } from 'react'
import Child from './Child'


//if move to out off the app noo need to use usecallback
const fetchData = (type) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${type}`)
        .then(response => response.json())
        .then(json => console.log(json))
}

const App = () => {
    const [count, setcount] = useState(0)

    const array = useMemo(() => {
        return ['one', 'two', 'three'];
    }, [])

    // const fetchData = useCallback((type) => {
    //     return fetch(`https://jsonplaceholder.typicode.com/todos/${type}`)
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // }, [])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // }, []);

    useEffect(() => {
        fetchData('todos');
    }, [fetchData])

    const increment = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button type="button" onClick={increment}>Increment</button>
            <Child title="Hello" array={array} fetchData={fetchData} />
        </div>
    )
}

export default App
