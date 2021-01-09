// type FlattenIfArray2<T> = T extends (infer R)[] ? R: T;

// let foo: FlattenIfArray2<Array<number>>;

type FuncWithOneObjectArgument<P extends { [x: string]: any }, R> = (
    props: P
) => R;
type DestructuredArgsOfFunction<
    F extends FuncWithOneObjectArgument<any, any>
> = F extends FuncWithOneObjectArgument<infer P, any> ? P : never;
const myFunction = (props: { x: number; y: number }): string => {
    return "OK";
};
const props: DestructuredArgsOfFunction<typeof myFunction> = {
    x: 1,
    y: 2,
};
