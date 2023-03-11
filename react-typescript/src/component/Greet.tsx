type GreetProps = {
    name: string,
    count?: number,  //optional props
    isLoggedIn: boolean
}
export default function Greet(props: GreetProps) {
    const { count = 0 } = props;

    return (
        <h2>welcome {props.name} and {count}</h2>
    );
}
