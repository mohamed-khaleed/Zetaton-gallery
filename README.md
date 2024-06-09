# React + Vite

# Zetaton Gallery
This project is built using a feature-based architecture. Below is a detailed explanation of the folder structure, technology stack, and instructions for running the project.

## Folder Structure
- **src**
  - **assets**: Contains images, icons, fonts, and other static assets used throughout the application.
  - **context**: Holds React context providers for managing global state and context values.
  - **features**: Contains individual feature modules, each with its own components, hooks, and logic. This helps in maintaining a modular structure.
  - **ui**: Includes reusable UI components like buttons, inputs, modals, etc.
  - **styles**: Contains global style definitions, theme settings, and CSS files.
  - **services**: Houses utility functions and services such as API calls, authentication logic, etc.
  - **pages**: Contains components that represent different pages or views in the application.



## Technology Stack

### @emotion/react

Emotion is a library designed for writing CSS styles with JavaScript. `@emotion/react` allows you to style your components with powerful and flexible CSS-in-JS techniques.

### @emotion/styled

This package is a companion to `@emotion/react` and provides a styled API for creating styled components. It enables you to write CSS styles directly within your component files.

### Material-UI

Material-UI (MUI) is a popular React UI framework that provides pre-built components following Material Design guidelines. It helps in building aesthetically pleasing and functional user interfaces.

### axios

Axios is a promise-based HTTP client for the browser and Node.js. It simplifies making asynchronous HTTP requests to REST endpoints and handling their responses.

### firebase

Firebase is a comprehensive app development platform by Google. It offers a variety of tools and services, such as authentication, cloud storage, and real-time databases, to help you build and scale applications quickly.

### react

React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state and lifecycle of those components efficiently.

### react-dom

React DOM is a package that provides DOM-specific methods for rendering and managing React components. It serves as the entry point for React into the DOM.

### react-hook-form

React Hook Form is a library for managing form state and validation in React applications. It provides a simple API for integrating forms into your app, reducing boilerplate code and improving performance.

### react-router-dom

React Router DOM is a library for managing routing in React applications. It allows you to declaratively define routes, handle navigation, and manage URL parameters within your app.

### styled-components

Styled-components is a library that enables you to write actual CSS in your JavaScript. It allows you to style your React components using tagged template literals, promoting a more modular and maintainable approach to styling.
## Running the Project

To run this project, follow the steps below:

1. **Install Dependencies**
   npm install

2. **Start the Development Server**:
   npm run dev
   
3. **Environment Variables**:
   - The `.env` file containing necessary environment variables will be sent via email for security reasons. Ensure this file is placed in the root directory of your project before running the development server.
4. **Search Functionality**:
   - The search functionality in this project works only when the Enter key is pressed.
5. **Common Issue and Solution**:
   - If you encounter an error like `Uncaught TypeError: createTheme_default is not a function` after installing the `node_modules` folder and starting the app, follow these steps:
     1. Close Visual Studio Code.
     2. Delete the `node_modules` folder.
     3. Run `npm install` again to reinstall the dependencies.
     4. Restart Visual Studio Code and the development server.
5. **SignUp new user**:
    - make sure to make an email format like (mohamed@gmail.com)
## Additional Notes

- Ensure that you have Node.js and npm installed on your machine.
- Regularly update dependencies to avoid compatibility issues.
- Follow the modular structure to keep the codebase maintainable and scalable.

For any further assistance or issues, feel free to reach out.

---


