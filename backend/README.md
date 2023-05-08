# About Boat-Webapp

This is the backend code for running the BoatApp.

It contains our entities definition, REST endpoints, and security configuration.

An in-depth explanation of the different dependencies is [available here](./docs/dependencies.md).

If you want to know more about what was implemented in this project, a documentation is [available here](./docs/features.md).

It is already configured to run in dev mode, but some parameters are configurable in the application.properties file.
You can find more about it [here](./docs/custom-configuration.md).

This project is small and was made in a few days.
But it was made as-if it was the first initialization of a more complex project.
Some thoughts about what could been done in the future is [available here](./docs/whats-next.md)

It was bootstrapped with [Spring Boot](https://spring.io/projects/spring-boot)

# Installation and requirements

This project was made and tested with [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.htmld)
It uses [gradle](https://gradle.org/)

Simply run `gradle bootRun` to install the dependencies and start the app.

# Available Scripts

In the project directory, you can run:

### `gradle bootRun`

Runs the app in the development mode.

### `gradle test`

Launches the test runner in the interactive watch mode.

### `gradle build`

Builds the app for production to the `build` folder.
