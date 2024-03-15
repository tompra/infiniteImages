# InfiniteImages

## Description

Built in React, this app uses Intersection Observer API for infinie scroll and lazy-images loaded images, which they are from the <a href="https://www.pexels.com/api/">Pexels API</a>. The resposive design ensure a viewing across devices, from phone to desktop. Users can favorite images by hovering over images, with details displayed photo name, photographer's name, and a favorite button. The favorites images are stored locally using Local Storage. Addionally, I conducted tests for each component using React-Test Library and Vitest.

## How to get the project running
1. Create directory in your local computer <span style="color: yellow;">`mk dir <name_your_directory>`</span>
2. Clone the GitHub repository using the command:  <span style="color: yellow;">`git clone <repository-url>`</span>
3. Navigate to the project directory: <span style="color: yellow;">`cd <project-directory>`</span>
4. Install dependencies <span style="color: yellow;">`npm install`</span>
5. Create your own API_KEY from the <a href="https://www.pexels.com/api/">Pexels API</a>
6. After successfully created your API_KEY, in the root of the project directory, create a secrets.json file.
7. Inside this file copy this: <span style="color: yellow;"> `{
    "API_KEY": YOUR_API_KEY
}`</span> (replace YOUR_API_KEY with your actual API key)
8. Run the project: <span style="color: yellow;">`npm run dev`</span>

## Technologies

### Dependecies

| Dependency                | Description                                        |
|---------------------------|----------------------------------------------------|
| prop-types                | Runtime type checking for React props              |
| react                     | A JavaScript library for building user interfaces  |
| react-dom                 | Entry point for DOM-specific methods used by React |

| DevDependency             | Description                                                             |
|---------------------------|-------------------------------------------------------------------------|
| @testing-library/jest-dom | Custom jest matchers to test the state of the DOM                       |
| @testing-library/react    | Simple and complete React DOM testing utilities                         |
| @testing-library/user-event | Simulate user events for testing React components                     |
| @types/react              | TypeScript types for React                                              |
| @types/react-dom          | TypeScript types for React DOM                                          |
| @vitejs/plugin-react      | Official Vite plugin for React                                          |
| eslint                    | JavaScript and TypeScript linter and formatter                          |
| eslint-plugin-react       | ESlint plugin for React-specific linting rules                          |
| eslint-plugin-react-hooks | ESlint plugin for React Hooks specific linting rules                    |
| eslint-plugin-react-refresh | ESlint plugin for React Refresh specific linting rules                |
| jsdom                     | A JavaScript implementation of the WHATWG DOM and HTML standards        | 
| vite                      | Fast, opinionated web dev server with a modern ES module build pipeline |
| vitest                    | A lightweight testing library for React applications                    |
