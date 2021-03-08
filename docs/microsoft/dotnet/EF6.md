# References

# General

-   Entity Framework API (EF6 & EF Core) includes the ability to map domain (entity) classes to the database schema, translate & execute LINQ queries to SQL, track changes occurred on entities during their lifetime, and save changes to the database.
-   An **entity** in Entity Framework is a class that maps to a database table.
-   An Entity can include two types of properties: **Scalar** Properties and **Navigation** Properties.
-   By default, Entity Framework enables cascade deletes for non-nullable foreign keys
-   The database context is the main class that coordinates Entity Framework functionality for a data model.
-   there is typically one database context class per database, although in more complex projects it is possible to have more.
-   The Entity Data Model backing the context can be specified in several ways.
    -   When using the Code First approach, the DbSet<TEntity> properties on the derived context are used to build a model by convention.
-   The connection to the database (including the name of the database) can be specified in several ways.
    -   If the parameterless DbContext constructor is called from a derived context, then the name of the derived context is used to find a connection string in the app.config or web.config file.
    -   Instead of using the derived context name, the connection/database name can also be specified explicitly by passing the name to one of the DbContext constructors that takes a string.

# Tools

-   Text Template Transformation Tool (T4)
