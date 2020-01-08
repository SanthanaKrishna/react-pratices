import React, { useState } from 'react'

function CounterObject() {
    const [name, setname] = useState({ firstname: '', lastname: '' })

    return (
        <div>
            <form>
                const name={}
                <input type="text" value={name.firstname} onChange={e => setname({ ...name, firstname: e.target.value })} />
                <input type="text" value={name.lastname} onChange={e => setname({ ...name, lastname: e.target.value })} />
                <h2>{name.firstname} {name.lastname}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>

        </div>
    )
}

export default CounterObject
