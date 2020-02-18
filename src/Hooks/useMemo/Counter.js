import React, { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incremetOne = () => {
        setCounterOne(counterOne + 1)
    }


    const incremetTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    //using memo
    const isEven = useMemo(() => {
        let i = 0
        while (1 < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    //without using memo
    // const isEven = () => {
    //     let i = 0
    //     while (1 < 2000000000) i++
    //     return counterOne % 2 === 0
    // }

    return (
        <div>
            <div>
                <button onClick={incremetOne}>Count One - {counterOne}</button>
                {/* <span>{isEven() ? 'Even' : 'odd'}</span> */}
                <span>{isEven ? 'Even' : 'odd'}</span>
            </div>
            <div>
                <button onClick={incremetTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
