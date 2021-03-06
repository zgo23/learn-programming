# CRA Eject

-   Motivation: not satisfied with the build tool and configuration choices

# CRA Debug

-   (Live edit and debug your React apps directly from VS Code — without leaving the editor) [https://medium.com/@auchenberg/live-edit-and-debug-your-react-apps-directly-from-vs-code-without-leaving-the-editor-3da489ed905f]

# CRA .env

# Lerna

-   A tool for managing JavaScript projects with multiple packages.

# Storybook

-   Debug
    -   (live debugging of storybook in chrome with vscode)[https://stephenweiss.dev/debug-storybook-chrome-vscode/]
-   The story is a function that returns a rendered element (i.e. a component with a set of props) in a given state---exactly like a Stateless Functional Component.
-   Template.bind({}) is a standard JavaScript technique for making a copy of a function.

# SourceMap

-   The problem solved: Given the line/col location in this generated code, in which file and at what line/col did it originate?
-   Two effective tutorials:

    -   [Anatomy of source maps](https://www.bugsnag.com/blog/source-maps)
    -   [Yet another explanation on sourcemap](https://medium.com/@trungutt/yet-another-explanation-on-sourcemap-669797e418ce)

-   Base64 VLQ (Variable Length Quantity)

# Modular SCSS

-   A comination of SCSS and CSS Modules
-   CSS Module: A CSS file in which all class names and animation names are scoped locally by default.
-   CSS in JS: using JavaScript objects to style components
-   (Modular SCSS and Why You Need It)[https://medium.com/clover-platform-blog/modular-scss-and-why-you-need-it-6bb2d8c40fd8]

# ESLint Issues

-   (eslint (and sublime-linter-eslint) cannot resolve .scss files)[https://github.com/benmosher/eslint-plugin-import/issues/707]

# Abstraction

-   Abstraction is the process of filtering out – ignoring - the characteristics of patterns that we don't need in order to concentrate on those that we do. It is also the filtering out of specific details. From this we create a representation (idea) of what we are trying to solve.

# React Component Packaging and Publishing

-   (How to share React Components between Applications via NPM)[https://nosleepjavascript.com/package-react-components/]
-   (How to publish packages to npm (the way the industry does things)) [https://zellwk.com/blog/publish-to-npm/]
    -   Use the `npx np` command

# npx

-   npx looks into the local /node_modules folder for the package and if it can’t find it, it will download and run it without having that package globally installed.
-   You can use npx to run any GitHub gists and repositories.
-   use **degit** to download folders from GitHub, e.g. `npx degit chromaui/learnstorybook-code/src/assets/icon src/assets/icon`

# Component-Driven Development(CDD)

-   a process that builds UIs from the “bottom up” starting with components and ending with screens.

# OS

-   Windows keyboards have a backspace key and a delete key. ... The delete key on a Mac, however, acts like the backspace key on a Windows keyboard. That is, it deletes the character to the left of the cursor. The delete key on a Windows keyboard does the opposite and deletes the character to the right of the cursor.
-   You shouldn't use the keypress event, but the keyup or keydown event because the keypress event is intended for real (printable) characters. keydown is handled at a lower level so it will capture all nonprinting keys like delete and enter.

# Backend

-   npx -p express-generator express --view=pug packages/server

# W3C

-   (Event Order)[https://www.quirksmode.org/js/events_order.html#link4]

# Performance

-   (Debounce, Throttle & requestAnimationFrame)[https://css-tricks.com/debouncing-throttling-explained-examples/]
