interface Foo {
    p1: string;
    p2: boolean;
    p3: string;
    p4: number;
    p5: () => void;
}

type FilteredKeys<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

type Foo2 = Pick<Foo, FilteredKeys<Foo, string>>;
