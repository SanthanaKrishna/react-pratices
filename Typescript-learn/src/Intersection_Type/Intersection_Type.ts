interface IA {
    a: number;
}

interface IB {
    b: number;
}

interface IC {
    c: number;
}

function X(obj: IA & IB & IC) {
    return obj.a + obj.b + obj.c;
}

function combine1<ObjA, ObjB>(objA: ObjA, objB: ObjB) {
    return { ...objA, objB }
}
function combine<ObjA extends object, ObjB extends object>(objA: ObjA, objB: ObjB): ObjA & ObjB {
    return { ...objA, ...objB }
}

const objA = { a: 1 }
const objB = { b: 2 }
const resultObj = combine(objA, objB)
const resultObj1 = combine1(objA, objB)