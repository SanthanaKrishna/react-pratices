function someFn(myArgument: number | string | boolean) {
    if (typeof myArgument === 'string') {
        let x = myArgument.toUpperCase()
    } else if (typeof myArgument === 'number') {
        myArgument.toFixed();
    } else {
        myArgument;
    }
}

interface Dog {
    bark(): void;
    walk(): void;
}

interface Cat {
    meow(): void;
    walk(): void;
}


function callMyPet(pet: Dog | Cat) {
    pet.walk();
    // pet.bark(); //Property 'bark' does not exist on type 'Dog | Cat'.
    if ((<Dog>pet).bark) {
        (<Dog>pet).bark();
    } else {
        (<Cat>pet).meow();
    }
}
//or
function isDog(someObj: Dog | Cat): someObj is Dog {
    return (<Dog>someObj).bark !== undefined;
}
function callMyPet1(pet: Dog | Cat) {
    pet.walk();
    // pet.bark(); //Property 'bark' does not exist on type 'Dog | Cat'.
    if (isDog(pet)) {
        pet.bark();
    } else {
        pet.meow();
    }
}
