# General

-   The main goal of Hooks is to decouple stateful logic from rendering logic.
-   we cannot access the updated state of a functional component until the next re-render.
-   Hooks require a completely different mindset from classic React development. We should not think about the life cycle of components anymore. Instead, we should think about data flow.
-   useReducer is an alternative to useState. it is used to deal with complex state logic.
-   The order of hooks matters.
-   the React team decided that the simplest API was to keep track of Hooks by counting the order in which they are called.

# References

-   [useEffect vs. useLayoutEffect in plain, approachable language](https://blog.logrocket.com/useeffect-vs-uselayouteffect/)

# How Hooks work internally?

# Limitations of hooks

# Ways to structure projects

-   by features
    -   Feature Examples
        -   Registering users
        -   Logging in/out
        -   Viewing a single post
        -   Creating a new post
        -   Listing posts
    -   Feature Groups
        -   User (Registering users, Logging in/out)
        -   Post (Creating, viewing, listing)
-   by routes
-   by the kind of code
