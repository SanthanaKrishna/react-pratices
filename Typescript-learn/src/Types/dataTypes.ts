// Boolean
let b: boolean = true;
//Number typescript support binary, octal, hex
let num: number = 1 + 0b1 + 0o1 + 0 * 1;
//String
const hello: string = 'hello';
const helloWorld = `${hello} world ${2 + 2}`
//Null and Undefined
let n: null = null;
let u: undefined = undefined;

//Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: Object = new Map;
// const myObj1: Object = new boolean; // primitive type will not assign to object

//Void
function log(message: string): void {
    console.log(message);
    // return message; /// if we return type error will occurs
}

//Array
let array1: string[] = ['x', 'y'];
// Generic type Array
let array2: Array<string> = ['x', 'y'];

//Tuple
let tuple: [string, number, boolean] = ['str', 1, true];

//Enum
enum Color {
    Red, Green, Blue
}

let myFavoriteColor: Color = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue) //0,1,2

enum Color1 {
    Red = 2,
    Green,
    Blue
}
console.log(Color.Red, Color.Green, Color.Blue) //2,3,4

enum UserRole {
    ADMIN= 'admin',
    USER= 'user',
}

function isAdminWithoutEnum(c: string) {
    if (c === 'admin') {
        return true
    }
    return false;
}
isAdminWithoutEnum('admin');

function isAdmin(c: UserRole) {
    if (c === UserRole.ADMIN) {
        return true
    }
    return false;
}
const role: UserRole = UserRole.ADMIN;
isAdmin(role);


//Type Assertions

// const email = document.getElementById('email');
// if (email) {
//     email.addEventListener('change', e => {
//         const input = e.currentTarget as HTMLInputElement;
//         // const input = <HTMLInputElement>e.currentTarget; // used in TSX

//     })
// }