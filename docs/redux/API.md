-   applyMiddleware returns a store enhancer
-   A store can be enhanced to have middleware, time travel, persistence
-   To apply multiple store enhancers, you may use compose().
-   If an **action creator** needs to read the current state, perform an API call, or cause a side effect, like a routing transition, it should return an **async action** instead of an action.

# Middleware

-   Middleware is the suggested way to extend Redux with custom functionality.
-   A middleware is a higher-order function that composes a dispatch function to return a new dispatch function. It often turns async actions into actions.
-   Middleware is composable. Multiple middleware can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.
-   the middleware signature is **({ getState, dispatch }) => next => action**.

# What is a plain object in JavaScript?

-   Plain Old JavaScript Object
-   a set of key-value pairs, created by the {} object literal notation or constructed with new Object().
