import React, { useState } from 'react'
import { ChromePicker } from 'react-color';

export const ColorPicker = () => {
    const [color, setColor] = useState('#fff');
    const [setshowColorPicker, setsetshowColorPicker] = useState(false)

    return (
        <div>
            <button onClick={() => showColorPicker(showColorPicker => !showColorPicker)}>
                {showColorPicker ? 'close color picker' : 'pick a color'}
            </button>
            {
                showColorPicker && (
                    <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />
                )
            }

            <h2>You picked {color}</h2>
        </div>
    )
}
