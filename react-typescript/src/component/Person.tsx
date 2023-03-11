import { PersonPropsType } from "./Common.types";

export default function Person(props: PersonPropsType) {
    return (
        <div>{props.name.first} {props.name.last}</div>
    )
}
