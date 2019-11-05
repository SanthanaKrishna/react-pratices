import React,{useContext} from 'react'
import ComponentF from './ComponentF';
import {UserContext, ChannelContext} from './index';
import User from '../../renderPropsPattern/user';


function ComponentE() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentE
