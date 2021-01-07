type sayHelloFn = (name: string) => string;

export const sayHello: sayHelloFn = (name) => {
    return `Hello, ${name}`;
};
