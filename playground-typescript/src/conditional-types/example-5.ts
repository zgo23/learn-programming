type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any;

type FooReturnType = ReturnType2<() => number>;
