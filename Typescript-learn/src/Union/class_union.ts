
class Foo {
    foo: number;
    commoProp: string;
}

class Bar {
    bar: number;
    commonProp: string;
}

function fooBarFunction(obj: Foo | Bar) {
    if (obj instanceof Foo) {
        obj.foo
    } else {
        obj.bar
    }
}