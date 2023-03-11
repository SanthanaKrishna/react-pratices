import { InputProps } from "./Input.types";

export default function Input({value, handleChange}: InputProps) {
    return (
        <input type="text" value={value} onChange={handleChange} />
    )
}
