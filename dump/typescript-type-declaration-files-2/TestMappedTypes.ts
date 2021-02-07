// interface PersonSubset {
//     name?: string;
//     age?: number;
// }

// interface PersonReadonly {
//     readonly name: string;
//     readonly age: number;
// }

// type MyPartial<T> = {
//     [P in keyof T]?: T[P];
// };

// type Keys = "option1" | "option2";
// type Flags = { [K in Keys]: boolean };

// interface Keys2 {
//     option1: number;
//     option2: number;
// }
// type Flags2 = { [K in keyof Keys2]: boolean };
// let o: Flags2 = {
//     option1: true,
//     option2: false
// }

type Proxy<T> = {
    get(): T;
    set(value: T): void;
};

type Proxify<T> = {
    [K in keyof T]: Proxy<T[K]>;
};

function proxify<T extends object>(o: T): Proxify<T> {
    const result = {} as Proxify<T>;
    for (let key in o) {
        let rawValue = o[key];
        result[key] = {
            get: () => rawValue,
            set: (value) => {
                rawValue = value;
            },
        };
    }
    return result;
}

function unproxify<T>(o: Proxify<T>): T {
    const result = {} as T;
    for (let key in o) {
        const proxy = o[key];
        result[key] = proxy.get();
    }
    return result;
}

let props = { rooms: 4, bathrooms: 1 };
let proxifiedProps = proxify(props);
proxifiedProps.rooms.set(5);
console.log(proxifiedProps.rooms.get());
proxifiedProps.bathrooms.set(2);
console.log(proxifiedProps.bathrooms.get());
console.log(JSON.stringify(unproxify(proxifiedProps)));
