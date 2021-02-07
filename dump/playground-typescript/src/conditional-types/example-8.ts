type Foo = {
    prop1: (p1: number) => boolean;
    prop2: (p1: number, p2: number) => number;
};

type UtilFuncs<T> = T extends {
    [K in keyof T]: infer R;
}
    ? R
    : never;

type FooFuncs = UtilFuncs<Foo>;

export {};
