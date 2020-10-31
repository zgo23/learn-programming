# Introduction

Lint and format a TypeScript project with ESLint + Airbnb + Prettier

# Configuration Steps

1. ESLint

    1. `yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-jest`

    2. `npx install-peerdeps --dev eslint-config-airbnb`

2. Prettier
    1. `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`
3. ESLint Config
    ```javascript
    module.exports = {
        extends: [
            "airbnb-typescript",
            "airbnb/hooks",
            "plugin:@typescript-eslint/recommended",
            "plugin:jest/recommended",
            "prettier",
            "prettier/react",
            "prettier/@typescript-eslint",
            "plugin:prettier/recommended",
        ],
        plugins: ["react", "@typescript-eslint", "jest"],
        env: {
            browser: true,
            es6: true,
            jest: true,
        },
        globals: {
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 2018,
            sourceType: "module",
            project: "./tsconfig.json",
        },
        rules: {
            "linebreak-style": "off",
            "prettier/prettier": [
                "error",
                {
                    endOfLine: "auto",
                },
            ],
        },
        ignorePatterns: [".eslintrc.js"],
    };
    ```
4. Scripts
    ```
    "scripts": {
         "format": "prettier --write src/**/*.ts{,x}",
         "lint": "tsc --noEmit && eslint src/**/*.ts{,x}"
    }
    ```

# References

[Create-React-App with TypeScript, ESLint, Prettier, and Github Actions](https://medium.com/@brygrill/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97)
