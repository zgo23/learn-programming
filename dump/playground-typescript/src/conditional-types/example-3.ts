type Diff<T, U> = T extends U ? never : T;
type Filter<T, U> = T extends U ? T : never;

type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;
type T31 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">;
type T32 = Diff<string | number | (() => void), Function>;
type T33 = Filter<string | number | (() => void), Function>;
