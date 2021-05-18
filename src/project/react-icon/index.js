import React from 'react';
import { IconContext } from 'react-icons';
import { FaBluetooth, FaReact } from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';


export const Icons = () => {
    return (
        <div>
            <FaReact
                color='red'
                size='10rem'
            />
            <MdAlarm color='purple'
                size='10rem' />

            <IconContext.Provider value={{ color: 'blue', size: '5rem' }}>
                <FaReact />
                <MdAlarm />
            </IconContext.Provider>
        </div>
    )
}
