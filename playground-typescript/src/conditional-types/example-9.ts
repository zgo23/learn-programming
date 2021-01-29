// Code from https://artsy.github.io/blog/2018/11/21/conditional-types-in-typescript/

// function process(text: null): null;
// function process(text: string): string;
// function process(text: any) {
//     return text && text.replace(/f/g, "p");
// }

function process<T extends string | null>(
    text: T
): T extends string ? string : null {
    return text && text.replace(/f/g, "p");
}

process("foo").toUpperCase();
process(null).toUpperCase();

declare const maybeFoo: string | null;
process(maybeFoo);

type Foo = keyof any;

export {};
