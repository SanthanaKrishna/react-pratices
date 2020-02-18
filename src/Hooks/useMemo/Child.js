import React, { useEffect } from 'react'

let renderCount = 0;
export const Child = () => {

    useEffect(() => {
        renderCount++;
    })

    return (
        <div>
            renderCount: {renderCount}
        </div>
    )
}
