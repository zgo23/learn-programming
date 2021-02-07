type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;
type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
}

type T40 = FunctionPropertyNames<Part>;
type T41 = NonFunctionPropertyNames<Part>;
type T42 = FunctionProperties<Part>;
type T43 = NonFunctionProperties<Part>;

interface Person {
    name: string;
    age: number;
    location: string;
}
type K1 = keyof Person;
type K2 = keyof Person[];
type K3 = keyof { [x: string]: Person };
