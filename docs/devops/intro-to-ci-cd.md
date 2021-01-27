# the steps needed to ship any product — not necessarily software:

-   Design
-   Develop
-   Package
-   Test
-   Delier

# Staging

-   apart from every developer’s local environment for coding and the final, stable environment for production — it’d be good to have a “staging” server to push the features into.
-   Use the `npx serve -s dist` to check how an app behaves in a simulated server environment.

# CI

-   repeated testing of our app’s integrity.
-   must be done during new code pushes
-   the CI process can define a batch of unit tests that will run with the code as part of the pull request.
-   Scenarios
    -   When a developer tries to push their code to the common codebase, then a set of unit tests need to pass.
    -   Scenario can be named Pipeline
    -   It’s possible to invoke particular pipelines from other ones as well, especially when we need to integrate a complex application consisting of many subparts that are being built separately.
-   Every reaction needs an action(trigger)
    -   A timer trigger (“Build a staging version of the app everyday at 6:00 p.m.”)
    -   A code repository trigger (“Run unit tests every time a new pull request has been published.”)
    -   A manual trigger (“Project manager starts the app building process and deploys to production.”)

# CD

-   everything related to the process of building and moving the application to the usable environment
-   fetch our app’s code from the designated branch (e.g., master), build it using the proper tools (e.g., webpack), and deploy it to the right environment (e.g., the hosting service).

# CI/CD Softwares

-   Installable software
    -   Apps or services you can install on your computer or some remote machine (e.g., Jenkins, TeamCity)
-   SaaS
    -   Apps or services with a web interface provided by an external company (e.g., CircleCI, Azure DevOps)
    -   CircleCI
        -   CircleCI is a cloud-based CI/CD service capable of integrating with GitHub, from which it can easily fetch source code. There is an interesting principle represented in this service: pipelines are defined from inside the source code. This means all your actions and reactions are configured by setting up a special file in your source code; in this case, it’s a file named config.yml in the folder named .circleci.
