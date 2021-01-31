# why are let and const preferrable to var?

-   var declarations are accessible anywhere within their containing function, module, namespace, or global scope, regardless of the containing block.
-   let declarations have drastically different behavior when declared as part of a loop.

# Shadowing

-   The act of introducing a new name in a more nested scope is called shadowing.

# Closure

-   each time a scope is run, it creates an “environment” of variables. That environment and its captured variables can exist even after everything within its scope has finished executing.
