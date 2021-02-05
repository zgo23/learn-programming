# Type Relations

## Subtype

-   If you have two types A and B, and B is a subtype of A, then you can safely use a B anywhere an A is required

## Supertype

-   a supertype is the opposite of a subtype.
-   If you have two types A and B, and B is a supertype of A, then you can safely use an A anywhere a B is required

# Variance

## An example that TS is not designed to be perfectly safe

```typescript
type ExistingUser = {
    id: number;
    name: string;
};
type NewUser = {
    name: string;
};

function deleteUser(user: { id?: number; name: string }) {
    delete user.id;
}
let existingUser: ExistingUser = {
    id: 123456,
    name: "Ima User",
};
deleteUser(existingUser);
```

# Subtyping Rules

-   if you expect a shape, you can also pass a type with property types that are <: their expected types, but you cannot pass a shape with property types that are supertypes of their expected types.
-   TypeScript shapes (objects and classes) are covariant in their property types. That is, for an object A to be assignable to an object B, each of its properties must be <: its corresponding property in B.
-   In TypeScript, every complex type is covariant in its members—objects, classes, arrays, and function return types—with one exception: function parameter types, which are contravariant.
-   A function A is a subtype of function B if A has the same or lower arity (number of parameters) than B and:
    -   A’s this type either isn’t specified, or is >: B’s this type.
    -   Each of A’s parameters is >: its corresponding parameter in B.
    -   A’s return type is <: B’s return type.

# Assignability

-   assignability refers to TypeScript’s rules for whether or not you can use a type A where another type B is required
    -   A <: B
    -   A is any

# Type Widening

-   Type widening is key to understanding how TypeScript’s type inference works.
-   Variables initialized to null or undefined are widened to any
-   Use as const when you want TypeScript to infer your type as narrowly as possible.

# Excess property checking

-   when you try to assign a **fresh object literal type** T to another type U, and T has properties that aren’t present in U, TypeScript reports an error.
-   A **fresh object literal type** is the type TypeScript infers from an object literal.

```typescript
type Options = {
    baseURL: string;
    cacheSize?: number;
    tier?: "prod" | "dev";
};

class API {
    constructor(private options: Options) {}
}

new API({
    baseURL: "https://api.mysite.com",
    tierr: "prod",
});
```

# Refinement

-   TypeScript performs flow-based type inference, which is a kind of symbolic execution where the typechecker uses control flow statements like if, ?, ||, and switch, as well as type queries like typeof, instanceof, and in, to refine types as it goes, just like a programmer reading through the code would.

```typescript
type Unit = "cm" | "px" | "%";
let units: Unit[] = ["cm", "px", "%"];
function parseUnit(value: string): Unit | null {
    for (let i = 0; i < units.length; i++) {
        if (value.endsWith(units[i])) {
            return units[i];
        }
    }
    return null;
}

type Width = {
    unit: Unit;
    value: number;
};

function parseWidth(width: number | string | null | undefined): Width | null {
    if (width === null || width === undefined) {
        return null;
    }

    if (typeof width === "number") {
        return {
            unit: "px",
            value: width,
        };
    }

    let unit = parseUnit(width);
    if (unit !== null) {
        return {
            unit,
            value: parseFloat(width),
        };
    }

    return null;
}
```

# Discriminated union types

```TypeScript
type UserTextEvent = {value: string, target: HTMLInputElement};
type UserMouseEvent = {value: [number, number], target: HTMLElement};
type UserEvent = UserTextEvent | UserMouseEvent;

function isUserTextEvent(event: UserEvent): event is UserTextEvent {
  return typeof event.value === 'string';
}
function handle(event: UserEvent) {
  if (typeof event.value === 'string') {
    event.value;
    event.target;
    return;
  }
  event.value;
  event.target;
}
```

## Totality (Exhaustiveness Checking)

# Type Guard

-   typeof
    -   typeof can only be used to check string, number, bigint, function, boolean, symbol, object, and undefined types.

```TypeScript
function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'`);
}

function padLeft2(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'`);
}
```

-   instanceof

# Type Operators for Object shapes

-   keying in
-   keyof

# Companion Object Pattern

-   Use the companion object pattern when a type and an object are semantically related, with the object providing utility methods that operate on the type.

```TypeScript
type Currency = {
  unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
}
let Currency = {
  DEFAULT: 'USD',
  from(value: number, unit = Currency.DEFAULT): Currency {
    return {
      unit, value
    }
  }
}
```

# Improving Type Inference for Tuples

```TypeScript
function tuple<T extends unknown[]>(...p: T): T {
  return p;
}
let t = tuple(1, true); // [number, boolean]
let t2 = [1, true]; // (number | boolean)[]
let t3 = [1, true] as const; // readonly [1, true]
```

# How to reject **any** as a function parameter?

-   https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360

# Escape Hatches

-   Use the escape hatches as little as possible
-   type assertion
-   nonnull assertion operators (!)

    -   When you find yourself using nonnull assertions a lot, it’s often a sign that you should refactor your code.
    -   Before refactor:

        ```TypeScript
        type Dialog = {
        id?: string;
        }
        function closeDialog(dialog: Dialog) {
        if (!dialog.id) {
            return;
        }

        setTimeout(() => {
            removeFromDom(dialog, document.getElementById(dialog.id!)!)
        })
        }

        function removeFromDom(dialog: Dialog, element: HTMLElement) {
        element.parentElement!.removeChild(element);
        delete dialog.id;
        }
        ```

        -   After refactor:

        ```TypeScript
        type VisibleDialog = {
        id: string;
        }
        type DestroyedDiag = {}
        type Dialog = VisibleDialog | DestroyedDiag;

        function closeDialog(dialog: Dialog) {
        if (!('id' in dialog)) {
            return;
        }

        setTimeout(() => {
            removeFromDOM(dialog, document.getElementById(dialog.id)!);
        });


        }

        function removeFromDOM(dialog: VisibleDialog, element: Element) {
        element.parentNode!.removeChild(element);
        delete dialog.id;
        }
        ```

-   Definite Assignment Assertion

    ```TypeScript
    let userId!: string
    fetchUser()
    userId.toUpperCase()
    function fetchUser() {
    userId = globalCache.get('userId')
    }

    declare let globalCache: {
    get(a: string): string;
    }
    ```
