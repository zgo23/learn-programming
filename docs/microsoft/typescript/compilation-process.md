# References

-   (Understanding TypeScript’s “Compilation Process” & the anatomy of “tsconfig.json” file to configure TypeScript Compiler)[https://medium.com/jspoint/typescript-compilation-the-typescript-compiler-4cb15f7244bc]

# Points

-   When you run tsc command in a directory, TypeScript compiler looks for the tsconfig.json file in the current directory and if it doesn’t find one, then it keeps looking up the directory tree until it finds one. The directory where the tsconfig.json is located is considered as the root of the project.

# Downlevel

-   Downlevel is a process of transforming a feature implementation of a programming language (that might not be available on all the platforms) into something that works well across platforms. It is also known as down compiling. For example, ES6 Arrow Functions can be transformed into normal function expressions that have supports across all browsers.
