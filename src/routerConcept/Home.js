import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <NavLink to='/ComponentA'>Component A</NavLink>
                </li>
                <li>
                    <NavLink to='/ComponentB'>Component B</NavLink>
                </li>
                <li>
                    <NavLink to='/ComponentC'>Component C</NavLink>
                </li>
            </ul>
        </div>
    )
}
