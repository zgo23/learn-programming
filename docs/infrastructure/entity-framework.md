- The very first task of EF API is to build an **Entity Data Model (EDM)**. EDM is an in-memory representation of the entire metadata: conceptual model, storage model, and mapping between them.
- **LINQ-to-Entities (L2E)** is a query language used to write queries against the object model. It returns entities, which are defined in the conceptual model.
- **DbConext** class represent a session with the underlying database using which you can perform CRUD (Create, Read, Update, Delete) operations.
- An **entity** in Entity Framework is a class that maps to a database table. This class must be included as a DbSet\<TEntity\> type property in the DbContext class.
- An Entity can include two types of properties: **Scalar** Properties and **Navigation** Properties.
- Dynamic Proxy is a runtime proxy class which wraps POCO entity. Dynamic proxy entities allow lazy loading.
- Microsoft.EntityFrameworkCore.EntityState
- EF Core DB providers

# Dependencies

- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.EntityFrameworkCore.Design

# dotnet ef not found in .NET Core 3

https://stackoverflow.com/questions/57066856/dotnet-ef-not-found-in-net-core-3
