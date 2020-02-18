import React, { memo } from 'react';
import { useCountRender } from './useCountRender';


export const Hello = memo(({ increment }) => {

    useCountRender()
    return (
        <div>
            <button onClick={() => increment(5)}>Hello</button>
        </div>
    )
})
