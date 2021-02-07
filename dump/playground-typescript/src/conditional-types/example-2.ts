type BoxedValue<T> = { value: T };
type BoxedArray<T> = { value: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

type T20 = Boxed<string>;
type T21 = Boxed<boolean[]>;
type T22 = Boxed<string | number[]>;
