```TypeScript
// export type BasicPrimitive = number | string | boolean;
// export function doStuff(value: BasicPrimitive) {
//   if (Math.random() < 0.5) {
//     return undefined;
//   }

//   return value;
// }

// const result = doStuff(5);

// let c: [string, string?] = ["hello"];
// c = ['hello', 'hello'];

// let d: [first: string, second?: string] = ['hello'];
// d = ['hello', 'hello'];

// let e: [string, string, ...boolean[]];
// e = ['hello', 'world'];
// e = ['hello','world', false];
// e = ['hello', 'world', true, false, true]

// let foo: [...string[], number];
// foo = [123];
// foo = ['hello', 123];
// foo = ['hello', 'world', 'hello!', 123];

// let bar: [boolean, ...string[], boolean];
// bar = [true, false];
// bar = [true, 'some text', false];
// bar = [true, 'some', 'separated', 'text', false];

// let baz: [boolean, ...string[], boolean];

// declare function doStuff(...args: [...names: string[], shouldCapitalize: boolean]): void;
// declare function doStuff2(...args: [...string[], boolean]): void;
// doStuff(false);
// doStuff('fee', 'fi', true);
// doStuff2(true);
// doStuff2('fee', 'fi', false);

// interface SomeType {
//     [propName: string]: any;
// }
// function doStuff(value: SomeType) {
//     let x = value['someProperty'];
// }

// interface Options {
//     exclude?: string[];
//     [x: string]: any;
// }

// function processOptions(opts: Options) {
//     if (opts.excludes) {
//         console.error('The options is not valid');
//     }
// }


// function processOptions2(opts: Options) {
//     for (const excludePattern of opts.excludes) {

//     }
// }

// abstract Construct Signatures
abstract class Shape {
    abstract getArea(): number;
}

// new Shape();

class Square extends Shape {
    #sideLength: number;

    constructor(sideLength: number) {
        super();
        this.#sideLength = sideLength;
    }

    getArea() {
        return this.#sideLength ** 2;
    }
}

new Square(42);

interface HasArea {
    getArea(): number;
}
let Ctor: abstract new () => HasArea = Shape;

function makeSubclassWithArea(Ctor: abstract new () => HasArea) {
    return class extends Ctor {
        getArea() {
            return 0;
        }
    }
}

makeSubclassWithArea(Shape);
// type MyInstance = InstanceType<typeof Shape>


abstract class SuperClass {
    abstract someMethod(): void;
    badda() {}
}

class SuperClass2 {}

type AbstractConstructor<T> = abstract new (...args: any[]) => T;

function withStyles<T extends AbstractConstructor<object>>(Ctor: T) {
    abstract class StyledClass extends Ctor {
        getStyles() {
            return {
                'width': 10
            };
        }
    }
    return StyledClass;
}

class SubClass extends withStyles(SuperClass) {
    someMethod() {

    }
}

class SubClass2 extends withStyles(SuperClass2) {

}
```
