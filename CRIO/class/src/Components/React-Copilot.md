# React.js README

## 1. What is React

ReactJS is an open-source JavaScript library developed by Facebook. It is used for building user interfaces and optimized web applications. It contains a set of optimized functions and is used in single-page applications where the entire app is loaded in one single HTML page.

## 2. Why React

React addresses several issues like large boilerplate code and difficulty in designing modular systems in JavaScript. It also solves the problem of reloading pages by using a Virtual DOM. Benefits of React include:

- Ease of maintenance.
- Performance improvements.
- Scalability.
- Reusability of code.

React supports two types of architecture:

1. Class-based.
2. Functional-based (the most recent one).

## 3. Explain the concept of virtual DOM

Virtual DOM is an object-like structure similar to the actual DOM but is lightweight and easy to manage. It only contains necessary mapping elements and their CSS. Manipulating the actual DOM can be expensive, especially when there are numerous updates and deletions. The virtual DOM is present and the data flow is always in a single direction.

## 4. What are Components in React

Components are small snippets of code put together to make app development easier. They are one of the core building blocks of React. React supports two types of components:

- **Class-based**.
- **Functional-based** (the most recent one).

## 5. Explain the building blocks of React

- Components: These are reusable blocks of code that return HTML.
- JSX: It stands for JavaScript and XML and allows you to write HTML in React.
- Props and State: Props are like function parameters and State is similar to variables.
- Context: This allows data to be passed through components without needing to pass props down manually at every level.
- Virtual DOM: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.

## 6. How do you create a component in React

There are two types of components in React:

- **Class-based**: The class components are a little more complex than the functional components. They require more boilerplate code. Data can be passed from one class component to another.
- **Functional-based**: You declare a functional component using a JavaScript function. This function returns JSX, which stands for JavaScript XML. It allows you to write HTML-like syntax within your JavaScript code. JSX makes your components more readable and maintainable.

## 7. How do browsers read JSX

Browsers are not capable of reading JSX directly and can only understand and read pure JavaScript. The web browsers read JSX with the help of a transpiler. Transpilers are used to convert JSX into JavaScript. The transpiler used is called Babel.

## 8. What are States and Props

- States are similar to variables. States are passed within the component only and can be modified.
- Props are used to pass data from one component to another. Props are passed as function arguments and cannot be modified (immutable).
- In class-based components, both state and props are objects. States act as local variables to that particular component.
- In functional components, States depend on how you define them. Props can be used with state and functional components.

## 9. What is JSX?

JSX stands for JavaScript XML. It is a templating language similar to HTML. It allows us to directly write HTML in React (within JavaScript code). Babel transpiler library is used to convert any JSX code into JavaScript that renders in the UI.

## 10. What are Life Cycle Methods in React

Life cycle methods describe how the life cycle of a component evolves. There are three phases of life cycle methods: Mounting Phase, Updating Phase, and Unmounting Phase.

## 11. What are keys in React

Keys are special string attributes. They are unique identifiers for React elements. Keys are mainly used for dynamic list rendering in the UI. For example, if you want to update or delete an item in a list, keys play a major role.

## 12. Explain the creation of a List in React

Lists are very useful when it comes to developing the UI of any website. Lists are mainly used for displaying menus on a website, for example, the navbar menu.

## 13. What are hooks in React

Hooks are used in functional Components. They are native React APIs (functions) which interact with different aspects of React. Hooks are independent and can be shared. We can reuse our business logic by converting it into a hook and reusing them in the component.

## 14. How do you handle events in React

Event handling works very differently in different browsers (Firefox, Safari). The React team came up with a new system in React called Synthetic events.
