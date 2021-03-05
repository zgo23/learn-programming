-   The **PascalCasing** convention, used for all identifiers except parameter names, capitalizes the first character of each word (including acronyms over two letters in length), as shown in the following examples:

**PropertyDescriptor HtmlTag**

A special case is made for two-letter acronyms in which both letters are capitalized, as shown in the following identifier:

**IOStream**

-   The **camelCasing** convention, used only for parameter names, capitalizes the first character of each word except the first word, as shown in the following examples. As the example also shows, two-letter acronyms that begin a camel-cased identifier are both lowercase.

propertyDescriptor ioStream htmlTag

-   DO favor readability over brevity.
-   Assembly and DLL names don’t have to correspond to namespace names, but it is reasonable to follow the namespace name when naming assemblies.
-   DO prefix interface names with the letter I, to indicate that the type is an interface.
-   DO ensure that the names differ only by the "I" prefix on the interface name when you are defining a class–interface pair where the class is a standard implementation of the interface.
