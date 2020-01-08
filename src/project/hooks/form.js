import React, { useState } from 'react';

export const Form = React.memo(() => {
    const [input, setInput] = useState({ name: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
    }
    return (
        < form onSubmit={handleSubmit}>
            <label>name</label>
            <input type="text" onChange={(e) => setInput({ ...input, name: e.target.value })} value={input.name} /> <br />
            <label>email</label>
            <input type="text" onChange={(e) => {
                const newEmail = e.target.value;
                setInput((prevInputSate) => (
                    { email: newEmail, password: prevInputSate.password, name: prevInputSate.name }
                ))
            }}
                value={input.email}
            /> <br />
            <label>password</label>
            <input type="text" onChange={(e) => setInput({ ...input, password: e.target.value })} value={input.password} /> <br />
            <button type="submit">submit</button>
        </form >
    )
}
)
