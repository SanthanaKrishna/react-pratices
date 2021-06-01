class Person {
    public name: string;
    public readonly age: number = 0;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
    }
}