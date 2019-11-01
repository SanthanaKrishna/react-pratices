import React from 'react';

const ChildernComp = (props) => {
    console.log('childern comp', props)
    return (
        <div>
            <p> this is childern component</p>
            <input type="text" />
            {props.children}
        </div>
    )
}


export default ChildernComp;