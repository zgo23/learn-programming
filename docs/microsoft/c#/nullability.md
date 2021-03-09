-   By default, any reference type variable can contain a special value, **null**, meaning that the variable does not refer to any object at all.
-   Nullable\<T\>
-   Null-conditional Operator
-   Null forgiving operator !

# Banish Null with non-nullable references

-   The possibility that a reference type variable might contain null makes it hard to know whether it’s safe to attempt to perform an action with that variable.
-   Some modern programming languages avoid the practice of allowing references to be nullable by default, offering instead some system for optional values through an explicit opt-in mechanism in the type system.
-   nullability has not been optional for all reference type variables.
-   in sections of code that enable this feature(**Nullable Reference**), nullability becomes an opt-in feature: a reference will never contain null unless it is explicitly defined as a nullable reference.
-   C# cannot always guarantee that a non-nullable reference will never contain a null.
-   nullable annotation context & nullable warning context
