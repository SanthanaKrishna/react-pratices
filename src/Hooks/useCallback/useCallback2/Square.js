import React, { memo } from 'react';
import { useCountRender } from './useCountRender';


export const Square = memo(({ n, increment }) => {

    useCountRender()
    return (
        <div>
            <button onClick={() => increment(n)}>{n}</button>
        </div>
    )
})


