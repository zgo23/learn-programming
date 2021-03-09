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

# The Reducer Hook

-   we should use a Reducer Hook instead of multiple State Hooks, because it is harder to maintain **synchronicity** between multiple State Hooks that depend on each other.
-   Throwing an error in the default case is different to what is best practice with Redux reducers, where we would simply return the current state in the default case. Because React Reducer Hooks do not store all state in one object, we are only going to handle certain actions for certain state objects, so we can throw an error for unknown actions.
-   If there are multiple setState functions that are always called at the same time, it is a good hint that they should be grouped together in a single Reducer Hook.
