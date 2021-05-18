// Interface
interface Profile {
    readonly name: string;
    age?: number;
}
let profile: Profile = {
    name: 'SK',
}

//Index Signature
interface A {
    someProp: string;
    [key: string]: number | string;
}
const a: A = { someProp: 'some props' };

// Call String
interface Sum {
    (a: number, b: number): number;
}
const sum: Sum = (a, b) => a + b;

// Extending Interface
interface Parent {
    x: string;
}

interface Parent2 {
    y: string;
}
interface Parent3 {
    z: string;
}

interface Child extends Parent, Parent2, Parent3 { }

let child: Child = { x: 'some prop', y: 'y prop', z: 'z prop' };