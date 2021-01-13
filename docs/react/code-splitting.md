-   The React.lazy function lets you render a dynamic import as a regular component.
-   The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.