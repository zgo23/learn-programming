// function pluck(o, propertyNames) {
//     return propertyNames.map((n) => o[n]);
// }

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map((n) => o[n]);
}

interface Car {
    manufacture: string;
    model: string;
    year: number;
}

let taxi: Car = {
    manufacture: "Toyota",
    model: "Camry",
    year: 2014,
};

let makeAndModel: string[] = pluck(taxi, ["manufacture", "model"]);
let modelYear = pluck(taxi, ["model", "year"]);
console.log(makeAndModel);
console.log(modelYear);

interface Dictionary<T> {
    [Key: string]: T;
}

type DictionaryKey = keyof Dictionary<number>;

const classmates: Dictionary<string> = {
    matthew: "A+",
    teresa: "B",
    eric: "B",
};

interface NotLegal {
    x: string;
}

type NotLegalKey = keyof NotLegal;

interface Foo {
    foo1: number;
    foo2: string;
}

type FooProp = keyof Foo;
