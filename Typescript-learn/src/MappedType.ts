type Properties = 'propA' | 'propsB';

type MyMapperType = {
    [P in Properties]: P;
}

type MyMapperType1<Properties extends string | number |symbol> = {
    [P in Properties]: P;
}

type MyMapperType<T> = {
    [P in keyof T]: T[P];
}
type MyNewType= MyMapperType1<'propsA' | 'propsB'>