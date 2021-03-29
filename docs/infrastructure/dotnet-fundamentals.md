# LINQ

- [LINQ Tutorial](https://www.tutorialsteacher.com/linq/linq-tutorials)
- We can write LINQ queries for the classes that implement IEnumerable<T> or IQueryable<T> interface.
- LINQ queries uses extension methods for classes that implement IEnumerable or IQueryable interface.
- The **Enumerable** and **Queryable** are two static classes that contain extension methods to write LINQ queries.
- The IQueryable<T> interface is used to provide querying capabilities against a specific data source where the type of the data is known. For example, Entity Framework api implements IQueryable<T> interface to support LINQ queries with underlaying databases such as MS SQL Server.
- There are around **50** Standard Query Operators available in LINQ that provide different functionalities like filtering, sorting, grouping, aggregation, concatenation, etc.
- The compiler converts query syntax into method syntax at compile time.
- The .NET compiler converts the lambda expression assigned to Func or Action type delegate into executable code at compile time.
- LINQ introduced the new type called Expression that represents strongly typed lambda expression. It means lambda expression can also be assigned to Expression\<TDelegate\> type. The .NET compiler converts the lambda expression which is assigned to Expression\<TDelegate\> into an Expression tree instead of executable code. This expression tree is used by remote LINQ query providers as a data structure to build a runtime query out of it (such as LINQ-to-SQL, EntityFramework or any other LINQ query provider that implements IQueryable\<T\> interface).

# Entity Framework Core

# Threading

# Reflection

- The Reflection API is a powerful set of resources that allows us to extract and manipulate metadata.

# MVC

# Web API

# Parallel processing, concurrency, and async

- [Multi-Threading vs Asynchronous programming. What is the difference?](https://medium.com/dev-genius/multi-threading-vs-asynchronous-programming-what-is-the-difference-3ebfe1179a5)
- Both Multi-threading and Asynchronous programming are different forms of concurrency
- **Threads** in computer science are the smallest sequence of processing, they are small series of executions that are performed within a process.
- [What is the difference between asynchronous programming and multithreading?](https://stackoverflow.com/questions/34680985/what-is-the-difference-between-asynchronous-programming-and-multithreading)
- Async programming is a key technique that makes it straightforward to handle blocking I/O and concurrent operations on multiple cores.
- Task-based async API + Language-level asynchronous programming model
- A **Task** represents an asynchronous unit of work.
- These programs often had the need for one thread to pass a unit of work to another thread.

# Configuring and Deploying to Azure

- Environments
  - Development
  - Stating
  - Production
- Services on Azure
  - App Services: to host ASP.NET Core backend API as well as React frontend.
- Create the Resource Group on Azure
- Create Profiles for staging and production environments
- The environment variable: ASPNETCORE_ENVIRONMENT
