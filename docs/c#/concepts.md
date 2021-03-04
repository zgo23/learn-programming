-   A typical C# program uses types from the class library and user-defined types that model the concepts that are specific to the program's problem domain.
-   The information stored in a type can include the following items:
    -   The storage space that a variable of the type requires.
    -   The maximum and minimum values that it can represent.
    -   The members (methods, fields, events, and so on) that it contains.
    -   The base type it inherits from.
    -   The interface(s) it implements.
    -   The location where the memory for variables will be allocated at run time.
    -   The kinds of operations that are permitted.
-   The compiler embeds the **type information** into the executable file as metadata. The **common language runtime (CLR)** uses that metadata at run time to further guarantee type safety when it allocates and reclaims memory.
-   use the **var** keyword to let the compiler infer the type.
-   A type conversion that doesn't cause data loss is performed automatically by the compiler. A conversion that might cause data loss requires a cast in the source code.
-   You use the struct, class, interface, and enum constructs to create your own custom types.
-   This unified type hierarchy is called the **Common Type System (CTS)**.
-   Reference types and value types have different compile-time rules, and different run-time behavior.
-   Typically, a **struct** is used as a container for a small set of related variables, as shown in the following example:

```C#
public struct Coords
{
    public int x, y;

    public Coords(int p1, int p2)
    {
        x = p1;
        y = p2;
    }
}
```

-   When the object is created, the memory is allocated on the managed heap, and the variable holds only a reference to the location of the object.
-   When a property implementation is a single expression, you can use expression-bodied members for the getter or setter:

```C#
public class Person
{
    public string FirstName
    {
        get => firstName;
        set => firstName = value;
    }
    private string firstName;
    // remaining implementation removed from listing
}
```

-   Beginning with C# 7.3, **field attributes** can be attached to the compiler generated backing field in auto-implemented properties.

```C#
public class Person
{
    public string FirstName { get; set; }

    public string LastName { get; set; }

    [field:NonSerialized]
    public int Id { get; set; }

    public string FullName => $"{FirstName} {LastName}";
}
```

-   **nameof** operator
-   Iterator Method: defines how to generate the objects in a sequence when requested.
    -   you can't have both a return statement and a yield return statement in the same method.

```C#
public IEnumerable<int> GetSingleDigitNumbers()
{
    yield return 0;
    yield return 1;
    yield return 2;
    yield return 3;
    yield return 4;
    yield return 5;
    yield return 6;
    yield return 7;
    yield return 8;
    yield return 9;
}
public IEnumerable<int> GetSingleDigitNumbers()
{
    int index = 0;
    while (index < 10)
        yield return index++;
}
public IEnumerable<int> GetSingleDigitNumbers()
{
    int index = 0;
    while (index < 10)
        yield return index++;

    yield return 50;

    index = 100;
    while (index < 110)
        yield return index++;
}
```

# .NET Core vs .NET Framework

-   Developers use the . NET framework to create Windows desktop applications and server based applications. ... NET Core is used to create server applications that run on Windows, Linux and Mac. It does not currently support creating desktop applications with a user interface. [.NET Core vs .NET Framework: How to Pick a .NET Runtime for an Application](https://stackify.com/net-core-vs-net-framework)

# LINQ

-   the integration of query capabilities directly into the C# language.
-   With LINQ, a query is a first-class language construct, just like classes, methods, events.
-   A query is not executed until you iterate over the query variable, for example, in a foreach statement.

# Pattern

-   A pattern describes one or more criteria that a value can be tested against.
-   constant pattern, e.g. case in switch
-   tuple patten, e.g. (0,0)
-   type pattern
-   case (0, int y): a positional pattern with a constant pattern in the first position and a type pattern in the second.
-   discard pattern
-   property pattern
-   is pattern, `bool isPoint = value is (int x, int y);`
