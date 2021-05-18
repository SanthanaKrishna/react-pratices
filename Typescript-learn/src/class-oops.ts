class Robot {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    askName() {
        console.log(`My name is ${this.name}`)
    }

    //method
    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`)
    }
}

class FlyingRobot extends Robot {
     jetpackSize: number;
    constructor(name: string, jetpackSize: number) {
        super(name); // constructor of parent class
        this.jetpackSize = jetpackSize;
    }
    move(distance: number) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const robot = new Robot('John');
robot.askName();

const flyingRobot = new FlyingRobot('SK', 2);
flyingRobot.move(10);
console.log(flyingRobot.jetpackSize)