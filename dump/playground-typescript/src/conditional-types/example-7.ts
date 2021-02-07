type HybridArray = (string | number)[];
const ha: HybridArray = [1, "abc"];

interface Car {
    manufacturer: string;
    model: string;
    year: number;
}

type Foo = Car[keyof Car][];
const foo: Foo = [1, 2];

interface Dictionary<T> {
    [key: string]: T;
}

type Foo2 = keyof Dictionary<boolean>;

type NumberArray = number[];
type NumberArrayItem = NumberArray[number];

type Filter2<T, U> = Pick<
    T,
    { [K in keyof T]: T[K] extends U ? K : never }[keyof T]
>;
type Car2 = Filter2<Car, string>;
export {};
