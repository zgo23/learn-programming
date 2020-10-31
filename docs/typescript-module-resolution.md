# Concepts

## Ambient

We call declarations that don’t define an implementation “ambient”. Typically, these are defined in .d.ts files. If you’re familiar with C/C++, you can think of these as .h files. Let’s look at a few examples.

## Module

In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.

## Module Resolution

Module resolution is the process the compiler uses to figure out what an import refers to. Consider an import statement like import { a } from "moduleA"; in order to check any use of a, the compiler needs to know exactly what it represents, and will need to check its definition moduleA.

# Rules

-   A re-export does not import it locally, or introduce a local variable.

# Findings

-   TypeScript will mimic the Node.js run-time resolution strategy in order to locate definition files for modules at compile-time.
