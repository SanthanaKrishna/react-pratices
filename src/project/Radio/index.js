import React from 'react'
import './Radio.css';

export const Radio = () => {
    return (
        <>

            <input type="radio" id="test1" name="group" className="radio-btn" />
            <label htmlFor="test1">Apple</label>

            <input type="radio" id="test2" name="group" className="radio-btn" />
            <label htmlFor="test2">Peach</label>


            <input type="radio" id="test3" name="group" className="radio-btn" />
            <label htmlFor="test3">Orange</label>




            <div>
                <p>
                    <input type="checkbox" id="check1" name="check-group" className="check-btn" />
                    <label htmlFor="check1">Apple</label>
                </p>
                <p>
                    <input type="checkbox" id="check2" name="check-group" className="check-btn" />
                    <label htmlFor="check2">Peach</label>
                </p>
                <p>
                    <input type="checkbox" id="check3" name="check-group" className="check-btn" />
                    <label htmlFor="check3">Orange</label>
                </p>
            </div>
        </>
    )
}
