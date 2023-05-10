# weekly-company-truck-lottery

This repository contains the source code for a web app designed to streamline company lunch events by suggesting a random food truck each week. The app achieves this by making an API call to fetch food truck data and then selecting one at random to recommend for the event.

## Summary

The Random Food Truck Selector Web App aims to simplify the process of organizing weekly company lunch events by providing a fun, easy-to-use platform that generates food truck suggestions based on the preferences and constraints of the organization. The app takes the hassle out of deciding on a food vendor, ensuring that employees can enjoy a diverse range of food truck experiences while fostering team building and engagement.

Feel free to contribute to this repository, report any issues, or suggest improvements. Happy coding and bon appétit!

# Key Features:

- Fetches up-to-date food truck data from a reliable API
- Randomly selects a food truck to suggest for the company lunch event
- User-friendly interface for easy navigation and interaction
- Responsive design for optimal viewing on various devices (mobile, tablet, and desktop)
- Customizable parameters, such as location and cuisine preferences
- Integration of calendar functionality to schedule and track weekly events

# Development

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Testing

## Testing a Create React App TypeScript App with Jest and React Testing Library

1. Create a new Create React App TypeScript project using the following command:

   ```bash
   npx create-react-app my-app --template typescript
   ```

2. Install Jest and React Testing Library using the following command:

   ```bash
   npm install --save-dev jest ts-jest @types/jest @testing-library/react @testing-library/jest-dom
   ```

3. Add the following Jest configuration in a `jest.config.js` file in the root directory of your project:

   ```javascript
   module.exports = {
     preset: "ts-jest",
     testEnvironment: "jsdom",
     setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
     transform: {
       "^.+\\.tsx?$": "ts-jest",
     },
     moduleNameMapper: {
       "^@/(.*)$": "<rootDir>/src/$1",
     },
     collectCoverageFrom: [
       "src/**/*.{ts,tsx}",
       "!src/**/*.d.ts",
       "!src/index.tsx",
       "!src/serviceWorker.ts",
     ],
   };
   ```

   - `preset`: Specifies the Jest preset to use, in this case `ts-jest` for working with TypeScript.
   - `testEnvironment`: Specifies the testing environment, in this case `jsdom` for testing React components in a DOM environment.
   - `setupFilesAfterEnv`: Specifies an array of setup files to run after the environment has been set up.
   - `transform`: Specifies the file extensions to transform, in this case `.tsx` and `.ts` files using `ts-jest`.
   - `moduleNameMapper`: Specifies a mapping for module names, in this case `@/` paths to the `src` directory.
   - `collectCoverageFrom`: Specifies an array of file globs to include in coverage reports.

4. Write your tests using Jest and React Testing Library in `*.test.tsx` or `*.spec.tsx` files. You can interact with the testing API to render React components, query the rendered output, and assert on the results. Here are some common methods available in the testing API:

   - `render`: Renders a React component and returns a `renderResult` object containing the rendered output.
   - `screen`: Provides a set of methods for querying the rendered output, such as `getByText` and `queryAllByRole`.
   - `act`: Wraps code that triggers a re-render so that React can update the component before testing it.
   - `fireEvent`: Provides a set of methods for simulating user events, such as `click` and `change`.

   Here is an example test file that uses these methods:

   ```javascript
   import { render, screen } from "@testing-library/react";
   import App from "./App";

   describe("App", () => {
     it("renders learn react link", () => {
       render(<App />);
       const linkElement = screen.getByText(/learn react/i);
       expect(linkElement).toBeInTheDocument();
     });
   });
   ```

5. Run your tests using the following command:

   ```bash
   npm test
   ```

   This command will run all tests in watch mode. You can also generate a coverage report using the following command:

   ```bash
   npm test -- --coverage
   ```

   This command will generate a coverage report in the `coverage` directory.

# Production

# Production - Weekly Company Truck Lottery

This project is hosted on GitHub: [Devin-GPT/weekly-company-truck-lottery](https://github.com/Devin-GPT/weekly-company-truck-lottery)

## Deployment

The project is automatically deployed using [Vercel](https://vercel.com/) when a pull request is merged.

🔗 **Live Site:** [https://weekly-company-truck-lottery.vercel.app/](https://weekly-company-truck-lottery.vercel.app/)
