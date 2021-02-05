-   To check whether y can be assigned to x, the compiler checks each property of x to find a corresponding compatible property in y. This comparison process proceeds recursively, exploring the type of each member and sub-member.
-   Type Compatibility determines if one thing can be assigned to another.

# Soundness

-   TypeScript’s type system allows certain operations that can’t be known at compile-time to be safe. When a type system has this property, it is said to not be “sound”. For example:

    ```typescript
    let foo: any = 123;
    foo = "Hello";

    // Later
    foo.toPrecision(3); // Allowed as you typed it as `any`
    ```

-
