import React from 'react'
import { useLocation, useHistory } from 'react-router';

function About() {
    const location = useLocation();
    const history = useHistory()
    console.log(location);
    console.log(useHistory);

    const goBackHandle=()=>{
        history.goBack();
    }
    return (
        <>
            <div>About</div>
            <div>Locatiom = {location.pathname}</div>
            <div>Locatiom = {location.state.from}</div>
            <button onClick={goBackHandle}>Go Back</button>
            <button onClick={()=>history.push('/')}>Home</button>
        </>
    )
}

export default About
