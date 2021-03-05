# any

-   opt-out of type checking
-   variables of type any allow you to access arbitrary properties, even ones that don’t exist.
-   The any will continue to propagate through your objects
-   In TypeScript everything needs to have a type at compile time, and any is the default type when you (the programmer) and TypeScript (the typechecker) can’t figure out what type something is.
-   any is the set of all values, and you can do anything with any.
-   Avoid any like fire, and use it only as a very, very last resort.
-   `keyof any` represents the type of any value that can be used as an index to an object. Currently you can use string or number or symbol to index into an object.

# unknown

-   If you have a variable with an unknown type, you can narrow it to something more specific by doing typeof checks, comparison checks, or more advanced type guards
-   Like any, it represents any value, but TypeScript won’t let you use an unknown type until you refine it by checking what it is
-   What operations does unknown support? You can compare unknown values (with ==, ===, ||, &&, and ?), negate them (with !), and refine them (like you can any other type) with JavaScript’s typeof and instanceof operators.
-   TypeScript will never infer something as unknown—you have to explicitly annotate it

# void

-   void is a little like the opposite of any: the absence of having any type at all.
-   Declaring variables of type **void** is not useful because you can only assign **null** (only if --strictNullChecks is not specified, see next section) or **undefined** to them

# never

-   The never type represents the type of values that never occur.
-   Variables also acquire the type never when narrowed by any type guards that can never be true.
-   The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

# null & undefined

-   not extremely useful on their own
-   By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.
-   However, when using the --strictNullChecks flag, null and undefined are only assignable to unknown, any and their respective types (the one exception being that undefined is also assignable to void).
-   undefined is “used when a variable has not been assigned a value” (source). [Hasn't been defined]
-   null “represents the intentional absence of any object value” (source).
-   undefined: neither an object nor a primitive value
-   in TypeScript the only thing of type undefined is the value undefined, and the only thing of type null is the value null.
-   null == undefined // true
-   null === undefined // false
-   null === null // true
-   undefined === undefined // true
