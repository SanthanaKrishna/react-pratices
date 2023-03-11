import React from "react"

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void // the method doest not return anything 
}
export default function Button(props: ButtonProps) {
    return (
        <button onClick={(event) => props.handleClick(event, 1)}></button>
    )
}
