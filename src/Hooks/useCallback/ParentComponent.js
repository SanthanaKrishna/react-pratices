import React, { useState, useCallback, useEffect } from 'react'
import Title from './Title';
import Button from './Button';
import Count from './Count';

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(5000)

    useEffect=(()=>{
        
    })
    //casted the fucntion
    const incremetAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incremetSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incremetAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incremetSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
