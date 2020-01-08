import React, { useState, useRef } from 'react'
import useDocumentTitle from './CustomUseDocTitle'

function DocTitleTwo() {
    const [title, setTitle] = useState(0)

    useDocumentTitle(title)

    return (
        <div>
            <input type="text" onChange={(event) => {
                const { value } = event.target;
                setTitle(value)
            }
            } />
            {/* <button onClick={() => setCount(count + 1)}>Count - {count}</button> */}
        </div>
    )
}

export default DocTitleTwo
