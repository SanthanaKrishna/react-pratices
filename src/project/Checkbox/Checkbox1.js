import React from 'react'
import './Checkbox.css';

const Checkbox1 = () => {
    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" id="check" hidden />
            <label for="check" className="checkmark"></label>
        </div>
    )
}

export default Checkbox1;
