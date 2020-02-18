import React, { uesState, useMemo } from 'react'
import Counter from './Counter'
import { Child } from './Child';

function useMemoHook() {
    const [i, setI] = uesState(0);

    function onClickHandle() {
        setInterval(i + 1)
    }

    const memoChild = useMemo(() => {
        return <Child></Child>
    }, [])

    //it will about when i get update
    const memoChild1 = useMemo(() => {
        return <Child></Child>
    }, [i])
    return (
        <div>
            <h2>i : {i}</h2>
            <button onClick={onClickHandle}>Incremement I</button>
            <h3>normal render</h3>
            <Child />
            <h3>Memo render</h3>
            {memoChild}
            <h3>Render only when i get update</h3>
            {memoChild1}
        </div>
    )
}

export default useMemoHook
