-   Constituent Technologies:
    -   Custom Elements
        -   Custom elements exist without third-party frameworks and the browser vendors are dedicated to the continued backward compatibility of the spec, all but guaranteeing that components written according to the specifications will not suffer from breaking API changes.
    -   Shadow DOM
        -   The shadow DOM is an encapsulated version of the DOM.
        -   any content inside of the document’s scope is referred to as the **light DOM**
    -   HTML Tempaltes
        -   Template can contain any HTML, including script and style elements.
    -   HTML Modules(prospective)
-   Web Components are generally available in all of the major browsers with the exception of Microsoft Edge and Internet Explorer 11, but polyfills exist to fill in those gaps.
-   the three technologies in the stack can be used independently or collectively.
-   how the various technologies fit together?
-   If custom elements are the way to create a new HTML (with a JS API), shadow DOM is the way you provide its HTML and CSS.

-   puzzles
    -   How does the <slot> in a shadow dom work?
    -   What is &mdash;?
    -   What is \<fieldset\>?

# Resources

-   (An Introduction to Web Components)[https://academind.com/tutorials/web-components-introduction/]
