# Features

-   Live code editing
-   Time traveling debugger

# Reducers

-   Redux reducers reduce a set of actions (over time) into a single state.
-

# Selectors

-   Selectors are functions that know how to extract specific pieces of information from a store state value.

# Store

-   A Redux store is created using a root reducer function
-   A store is not a class. It's just an object with a few methods on it

# Store Enhancer

-   A store enhancer is a higher-order function that composes a store creator to return a new, enhanced store creator.
-   The applyMiddleware API is used to create a store enhancer.

# Middleware

-   Middleware is the suggested way to extend Redux with custom functionality.
-   A middleware is a higher-order function that composes a dispatch function to return a new dispatch function. It often turns async actions into actions.

# Action

-   A plain object describing the change that makes sense for your application.
-   Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.
-   Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module

# Aysnc Action

-   Async actions are usually asynchronous primitives like Promises, Observables, or thunks.
