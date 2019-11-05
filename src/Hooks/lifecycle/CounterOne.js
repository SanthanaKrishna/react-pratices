import React, { useState, useEffect } from 'react'

function CounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    useEffect(() => {
        console.log('useEffect- updating document title')
        document.title = `you clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default CounterOne


// componentDidMount(){
//     document.title=`you clicked ${this.state.count} times`
//     this.interval= setInterval(this.tick,1000)
//   }
//   componentDidUpdate(){
//       document.title=`you clicked ${this.state.count} times`
//   }