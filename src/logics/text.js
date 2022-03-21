
//Type your code here


console.log(a) //Undefined 
let a = 100;
///////////////////////////////
const a = {
    email: 'abc'
}

a.email = 'dshdgh';
/////////////////////////////////////////
function a() {
    var x = 1;
    return () => x + 2;
    function test() {
        return this.firstName;
    }

}
console.log(x); undefined
const obj = {
    firstName: 'test'
}
function test() {
    return this.firstName;
}
test.call(obj)
test.apply('', [obj])
const myFun = test.bind(obj)
myFun()
    /////////////////////////////////////////////////
    (function immediateA(a) {
        return (function immediateB(b) {
            console.log(a); // What is logged?   0
        })(1);
    })(0);

(function immediateA(a) {
    return (function immediateB(b) {
        console.log(this.a, this); // What is logged?   
    })(1);
})(0);

//////////////////////////////////////////

let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count); // What is logged?  1
    }
    console.log(count); // What is logged?  0
})();

/////////////////////

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?  3
    }, 1000);
}
////////////////

function a(name, age) {
    this.name = name;
    this.age = age
    return this.name
}

const a = (x) => (y) => {
    return () => x;

}

function a() {
    return b(){
        return
    }
} ()()

var b = () => {

}

//callback function
var a = (b) => {
    b()
}

////////////
HOF
function sayHello() {
    return function () {
        console.log("Hello!");
    }
}

const myFun = sayHello()
myFun()

/////////////////////
const multiply = (x) => (y) => x * y;

const multiply = (x, y) => {
    if (y != undefined) {
        return x * y;
    } else {
        return (y) => x * y;
    }
}

multiply(4, 5); // => 20
multiply(3, 3); // => 9

const double = multiply(2);
double(5);  // => 10
double(11); // => 22
///////////////////////////////////////////////////
const x = (a, b, ...z) => { ///reset
    return {

    }
}
x(1, 2, 3, 4, 5, 6)

const arr1 = [1, 2, 3]
const arr2 = []
[...arr1, ]


const obj = {
    a: 1,
}

const obj3 = obj;
obj3.a = 5;
obj.a;/// 5
///////////////
const obj1 = Object.create(obj)
obj1.a = 2
delete obj1.a;
console.log(obj1) //// {}
console.log(obj1.a) ///1

const x = (a, b) => a + b;

const arr = [1, 2, 3, 4]
const newArr1 = arr.map(item => item + 1)
console.log(newArr1)///[2, 3, 4, 5]

arr.filter(item => item > 2) //[3,4]

arr.reduce((prev, curr) => prev + curr, 0) //0+1    1+2   3+3  6+4   //10

arr.splice(1, 2)  ///[1,4]
arr.slice(1, 2) //[2,3]

''.split('').reverse().join('') === ''
//krishna
const countingVowels = (str) => {
    // const count = str.match(/[aeiou]/gi);
    // console.log(count.length)
    const obj = {};
    arr = ['a', 'e', 'i', 'o', 'u']
    for (i = 0; i > str.length; i++) {
        if (arr.indexOf(i) != -1) {
            obj

        }
    }
}



