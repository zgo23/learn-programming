-   OWIN defines a standard interface between .NET web servers and web applications. The goal of the OWIN interface is to decouple server and application
-   OWIN is mainly categorized as middleware technologies. Middleware is computer software that provides services to software applications beyond those available from the operating system. It can be described as "software glues"
-   Formerly .NET web applications very tightly integrated with IIS.
-   The goal of OWIN is to decouple a web application from a web server so that we don’t have to worry about how the application will be deployed; instead, we just focus on solution to our problems. OWIN provides an abstraction layer between a web server and a web application. Now, the question is how someone abstract a web server from web application.

## Abstracting away a web server from a web application is, for sure, a very complex job and it should be understandable to the average developer. But OWIN has made it very simple and it abstracts a web server with a standard .NET delegate called **AppFunc** that takes **System.Collections.Generic.IDictionary<string, object>** as an argument and returns a **System.Threading.Tasks.Task**.

# Resources

-   [Basics of OWIN and Katana](https://www.c-sharpcorner.com/UploadFile/vendettamit/basics-of-owin-and-katana/)
-   [Understanding ASP.NET - Part Two - Building An Owin Pipeline](https://www.c-sharpcorner.com/article/understanding-asp-net-part-two-building-an-owin-pipeline/)
