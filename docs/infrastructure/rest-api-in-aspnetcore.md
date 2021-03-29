# Best Practices

- A **resource class** is a class that contains only basic information that will be exchanged between client applications and API endpoints, generally in form of JSON data, to represent some particular information.
  All responses from API endpoints must return a resource.
- a repository shouldn’t persist data, it’s just an in-memory collection of objects.
- Use **AutoMapper** to do object to object mapping
