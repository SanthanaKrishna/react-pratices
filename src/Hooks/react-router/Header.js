import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About'
import User from './User';
function Header() {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to={
                            {
                                pathname: '/about',
                                state: {
                                    from: 'root'
                                },
                                search:"",
                            }
                        }>About</Link>
                    </li>
                    <li>
                        <Link to='/user/santhana/krishna'>User</Link>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/user/:firstname/:lastname' component={User} />
                    </Switch>
                </div>
            </header>
        </div>
    )
}

export default Header
