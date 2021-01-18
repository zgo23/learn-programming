function fibCreator() {
    const cache = {};

    return function fib(n) {
        if (cache[n] !== undefined) return cache[n];
        if (n === 0) return (cache[0] = 0);
        if (n === 1) return (cache[1] = 1);
        return (cache[n] = fib(n - 2) + fib(n - 1));
    };
}

const n = 300;
const fib = fibCreator();
console.log(`fib(${n}) is ${BigInt(fib(n)).toString()}`);
