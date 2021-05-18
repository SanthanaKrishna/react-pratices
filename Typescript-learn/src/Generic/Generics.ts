//Generic Functions
function genericFunction<T>(x: T): T {
    return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// Generic Interface
interface GenericInterface<T> {
    (a: T): T;
    someProp: T;
}

interface GenericInterface<T> {
    <U>(a: U): U;
    someProp: T;
}

// Generic Classes
class GenericClass<P>{
    constructor(public props: P) {

    }

    getProps(): P {
        return this.props;
    }
}

