import React from 'react'

// const FRInupt=() => {
//   return (
//     <div>
//       <input type="text"/>
//     </div>
//   )
// }

const FRInupt = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default FRInupt;