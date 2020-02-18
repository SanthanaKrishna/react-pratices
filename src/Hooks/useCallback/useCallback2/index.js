import React, { useState, useCallback } from 'react'
import { Hello } from './Hello';
import { Square } from './Square';

export const APP = () => {
    const [count, setCount] = useState(0);
    const favoriteNums = [7, 21, 37];
    const increment = useCallback = ((n) => {
        setCount(c => c + 1);
        // return 5;
    }, [setCount]);


    return (
        <div>
            <Hello increment={increment} />
            <div>count: {count}</div>
            {
                favoriteNums.map(n => {
                    return (
                        <Square increment={increment}  n={n} key={n} />
                    )
                })
            }
        </div>
    )
}
