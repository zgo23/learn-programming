# Purposes

-   complex synchronous logic that needs access to the store
-   simple async logic like AJAX requests

# Thunk

-   A thunk is an expression that wraps an expression to delay its execution.
-   A thunk in a redux application is a function that can be dispatched to perform async activity and can dispatch actions and read state.
