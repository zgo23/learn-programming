type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

type T0 = TypeName<string>;
type T1 = TypeName<"a">;
type T2 = TypeName<true>;
type T3 = TypeName<() => void>;
type T4 = TypeName<string[]>;

type T10 = TypeName<string | (() => void)>;
type T12 = TypeName<string | string[] | undefined>;
type T11 = TypeName<string[] | number[]>;