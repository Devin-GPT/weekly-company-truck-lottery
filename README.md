# Food Truck Lottery Assignment

This repository contains a solution to the Engineering Challenge for managing our team's food truck habit. The main project is located in the `weekly-company-truck-lottery` directory. This directory contains a real-world implementation of a web application for suggesting a random food truck for a company lunch event weekly.

The original instructions for the assignment are preserved in `README.old.md` in this root directory.

## Project Structure

.
├── README.md # This file
├── README.old.md # Original assignment instructions
└── weekly-company-truck-lottery # The main project 

## Project Description

Inside the `weekly-company-truck-lottery` directory, you'll find a web application that picks a random food truck from the San Francisco open dataset API and suggests it for a weekly company lunch event. This project is designed to be a production-ready application with a clean codebase, proper documentation, and tests.

The web application is built using React and TypeScript, along with a custom hook for fetching the food truck data and selecting a random address. The custom hook and the main component are tested using React Testing Library and Jest.

The `weekly-company-truck-lottery` directory includes its own `README.md` file with detailed instructions for setting up, running, and testing the project, as well as notes on the implementation and technologies used.

## Thought Process and Trade-offs

Throughout the development of this assignment, I aimed to prioritize production-readiness and code quality over implementing a wide range of features. I focused on creating a clean and maintainable codebase by using TypeScript for better type safety, creating reusable components and hooks, and writing comprehensive tests.

Some trade-offs and considerations made during the development process:

1. I chose React as the frontend library because of its popularity, ease of use, and my familiarity with it. Other options could have been Angular or Vue.js, but React allowed me to quickly create a functional and maintainable application.

2. I used the axios library for making API calls due to its flexibility and wide adoption. Alternatively, I could have used the native Fetch API; however, axios provides some useful features like request and response interceptors and automatic JSON data transformation.

3. Due to the time constraint, I focused on the core functionality of fetching the data and selecting a random food truck address. If given more time, I would have liked to add features like filtering by cuisine, displaying additional information about the selected food truck, and integrating a map to visualize the food truck locations.

4. If I were to do this assignment again, I would consider adding error handling for the API calls and displaying a user-friendly error message in the UI. This would improve the user experience and provide better resilience in case of issues with the API.

5. I would also consider deploying the application to a platform like Vercel or Netlify, to showcase the project in a live environment and make it easier for users to try it out.

## Getting Started

To get started with the project, please refer to the `README.md` file inside the `weekly-company-truck-lottery` directory for setup and usage instructions.

## Note on Language Choice

Initially, I was very excited about the prospect of using Elixir and Phoenix for this assignment, as mentioned in the job description. My passion for functional programming has led me to explore and learn Elixir, and I was thrilled to be considered for a role that actively uses this language and framework, especially with a front-end leaning focus.

However, after carefully reviewing the assignment instructions and considering the language used around production and quality, I decided to use React for this project. My familiarity with React allowed me to quickly create a functional and maintainable application, focusing on the core requirements and production-readiness aspects mentioned in the README. Like testing and deploying. Which I have limited experience with in Elixir.

Nevertheless, I wanted to express my excitement and passion for the opportunity to master Elixir and Phoenix, as well as other functional programming languages and frameworks, in a professional environment. I am eager to learn and expand my skill set. and I believe this role provides a unique and exciting opportunity to do so. 
