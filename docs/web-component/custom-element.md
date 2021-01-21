# Lifecycle

-   Whereas the constructor is used to set up the bare bones of the element, the **connectedCallback** is typically used for adding content to the element, setting up event listeners or otherwise initializing the component.
-   In fact, the constructor can’t be used to modify or manipulate the element’s attributes by design.
-   With standard built-in elements, the custom element’s state is typically reflected by what attributes are present on the element and the values of those attributes.
-   This **attributeChangedCallback** lifecycle method is called whenever one of the element constructor’s **observedAttributes** are updated.
-   The **disconnectedCallback** is the inverse of the connectedCallback in that the method is called once the element is removed from the DOM and allows us to clean up any event listeners or MutationObservers attached to our element.
