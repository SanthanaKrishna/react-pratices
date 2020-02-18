import React, { useEffect } from 'react'

const Child = (props) => {
    console.log('child render');

    useEffect(() => {
        props.fetchData('users');
    }, [props.fetchData])

    return (
        <div>
            {props.title} Child Component
        </div>
    )
}

export default React.memo(Child);
