//Generic
const map = new Map<number, string>()
map.set(1, 'foo')
//Generic Functions

function genericFunction<T>(x: T): T {
    return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// type T in function getPromise<T> will return same type Promise<T>
// declare type and return type are same as T 
// 'foo' is string so T type is a string
function getPromise<T>(value: T): Promise<T> {
    return new Promise((res, rej) => setTimeout(() => res(value), 1000))
}
const value = await getPromise('foo');
console.log(value)

//example 2
class MyMap extends Map<number, string>{

}

function getPromise2<T extends Map<number, string>(value: T): Promise<T> {
    return new Promise((res, rej) => setTimeout(() => res(value), 1000))
}
const value2 = await getPromise(new MyMap());

// expample 3
class User {

}
function getPromise3<T extends User(value: T): Promise<T> {
    return new Promise((res, rej) => setTimeout(() => res(value), 1000))
}
const value3 = await getPromise(new User());


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

