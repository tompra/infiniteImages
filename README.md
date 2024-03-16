# InfiniteImages

## Description

Built in React, this app uses Intersection Observer API for infinite scroll and lazy-loaded images, which are from the <a href="https://www.pexels.com/api/">Pexels API</a>. The responsive design ensures viewing across devices, from phone to desktop. Users can favorite images by hovering over them, with details displayed including photo name, photographer's name, and a favorite button. The favorite images are stored locally using Local Storage. Additionally, I conducted tests for each component using React Testing Library and Vitest.

## How to get the project running

### Git clone
1. Create a directory on your local computer: `mkdir <name_your_directory>`
2. Clone the GitHub repository using the command: `git clone <repository-url>`
3. Navigate to the project directory: `cd <project-directory>`
4. Install dependencies: `npm install`
5. Create your own API_KEY from the <a href="https://www.pexels.com/api/">Pexels API</a>.
6. After successfully creating your API_KEY, in the root of the project directory, create a `secrets.json` file.
7. Inside this file, copy this:
    ```json
    {
        "API_KEY": "YOUR_API_KEY" (replace YOUR_API_KEY with your actual API key)
    }
    ```
8. Run the project: `npm run dev`
9. Run tests: `npm run test`

### Zip file
1. Download the zip file
2. Decompress the project
3. Navigate to the project directory: `cd <project-directory>`
4. Install dependencies: `npm install`
5. Create your own API_KEY from the <a href="https://www.pexels.com/api/">Pexels API</a>.
6. After successfully creating your API_KEY, in the root of the project directory, create a `secrets.json` file.
7. Inside this file, copy this: 
    ```json
    {
        "API_KEY": "YOUR_API_KEY" (replace YOUR_API_KEY with your actual API key)
    }
    ```
8. Run the project: `npm run dev`
9. Run tests: `npm run test`


## Technologies

### Dependencies

| Dependency | Description                                        |
| ---------- | -------------------------------------------------- |
| prop-types | Runtime type checking for React props              |
| react      | A JavaScript library for building user interfaces  |
| react-dom  | Entry point for DOM-specific methods used by React |

### DevDependencies

| DevDependency               | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| @testing-library/jest-dom   | Custom Jest matchers to test the state of the DOM                       |
| @testing-library/react      | Simple and complete React DOM testing utilities                         |
| @testing-library/user-event | Simulate user events for testing React components                       |
| @vitejs/plugin-react        | Official Vite plugin for React                                          |
| eslint                      | JavaScript and TypeScript linter and formatter                          |
| eslint-plugin-react         | ESLint plugin for React-specific linting rules                          |
| eslint-plugin-react-hooks   | ESLint plugin for React Hooks specific linting rules                    |
| eslint-plugin-react-refresh | ESLint plugin for React Refresh specific linting rules                  |
| jsdom                       | A JavaScript implementation of the WHATWG DOM and HTML standards        |
| vite                        | Fast, opinionated web dev server with a modern ES module build pipeline |
| vitest                      | A lightweight testing library for React applications                    |
