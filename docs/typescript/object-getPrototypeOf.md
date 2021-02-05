```typescript
function isPlainObject(obj: any): boolean {
    if (typeof obj !== "object" || obj === null) return false;

    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(obj) === proto;
}

const foo = {
    p: "abc",
};
const bar = Object.create(foo);
console.log(typeof bar); // "object"
console.log(Object.getPrototypeOf(bar) === foo); // true
console.log(isPlainObject(bar)); // false
```
