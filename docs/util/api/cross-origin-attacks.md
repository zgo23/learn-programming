# Facts

-   for any HTTP request to a particular domain, browsers automatically attach any cookies bounded to that domain.

# Security Policies

-   a security policy can be risky, but a security policy like same-origin is a bit too restrictive.

## same-origin

-   The same-origin policy is very restrictive. Under this policy, a document (i.e., like a web page) hosted on server A can only interact with other documents that are also on server A. In short, the same-origin policy enforces that documents that interact with each other have the same origin.
-   An origin is made up of the following three parts: the protocol, host, and port number.
-   Ways to bypass same-origin policy
    -   CORS
    -   \<image\>
    -   \<script\>
        -   In order for JSONP to work, both the client and the server have to support it.
        -   (JSONP demystified: What it is and why it exists)[https://blog.logrocket.com/jsonp-demystified-what-it-is-and-why-it-exists/]
    -   \<iframe\>
-   Same-Origin Policy is a concept implemented in browsers. Other tools or software components don’t care about it that much.
-   SOP doesn’t apply server-to-server communication

## cross-origin (CORS)

-   A request for a resource (like an image or a font) outside of the origin is known as a cross-origin request.
-   CORS (cross-origin resource sharing) manages cross-origin requests.
-   Cross-origin requests, however, mean that servers must implement ways to handle requests from origins outside of their own.
-   CORS allows servers to specify who (i.e., which origins) can access the assets on the server, among many other things.
-   The intention of CORS is to allow cross-origin requests for XHR requests while giving the server the authority to specify what origin has access to which resource.
-   Even though some people call CORS a security mechanism, it’s actually the opposite. It’s a way to relax security and make it less restrictive. SOP is implemented in almost all modern browsers and because of that, a website from one origin is not allowed to access resources from foreign origins. CORS is a mechanism to make it possible.
-   Really awesome article: (Do You Really Know CORS?)[https://dzone.com/articles/do-you-really-know-cors]

# cross-site request forgery (CSRF)

-   (Cross-site request forgery (CSRF))[https://portswigger.net/web-security/csrf]

# cross-site script inclusion (CSSI)
