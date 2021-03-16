# in vs out vs ref

-   As you know, value types are normally passed by value, meaning a copy has to be made when passing a value as an argument. The **in** keyword enables us to avoid this copy by passing a reference instead.
-   You should only use **in** for types that are larger than a pointer.
-   You should use **in** only with readonly value types, because mutable value types can undo the performance benefits. (Mutable value types are typically a bad idea in any case.)
-   You can use the **out** and **ref** keywords with reference types too. That may sound redundant, but it can be useful. It provides double indirection—the method receives a reference to a variable that holds a reference.
-   you cannot put a reference to a local variable in something that might outlive the variable it refers to. So **you cannot use this (ref) keyword on a field**.
-   C# nested classes are equivalent to Java **static** nested classes
-   In fact, an enum is really just a fancy way of defining a load of const fields.
-   The compiler generates a fairly ordinary class definition for each anonymous type.
-   you’re free to use type parameters as arguments for other generic types.
-   Generic type ---Type arguments are supplied---> Constructed type
-   if you want to use one of your own type parameters as the type argument for a generic that specifies a constraint, you’ll need to specify the same constraint on your own type parameter.
-   All delegate types derive from System.Delegate, and all enumeration types derive from System.Enum.
-   a new array of any type will have all of its elements initialized to a known value.
