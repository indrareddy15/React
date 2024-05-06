# React.js README

## 1. What is React

    ReactJS is an open-source JavaScript library developed by Facebook.It is used for building user interfaces and optimized web applications
    It contain set of optimized functions and It is a single page applications in which entire app is used in one single HTML

## 2. Why React

    Start with drawbacks like When dealing with Javascript it contain large boiler plate code moduler system designing of the components will become difficult
    React address major issue of reloading by using Virtual DOM
    - Ease of maintenance.
    - Performance improvements.
    - Scalability.
    - Reusability of code.

    React supports two types of architecture:
    1. Class-based.
    2. Functional-based (the most recent one).

    ### Note:
    - JQuery use Direct access of DOM it is most expensive to handle
    - Anugular is Framework that means it has large ecosystem every things comes under single package including Data manipulation

## 3. Explain the concept of virtual DOM

    Virtual DOM is object like structure similar to Actual DOM but Virtual DOM is light weight and easy to manage It will only contain necessary Mapping elements and it's CSS
    When it comes to actual DOM manipulation it is very expensive Suppose we have "n" of updations , deletations becomes an expensive process and it will degerade the process

    For Example
    - Whenever the first state or prop changes, the Virtual DOM will have an exact copy of the actual DOM (V1).
    - Then, the next state or prop update occurs. If there are five clicks, all will be merged into one (V2). From here, React undergoes the process called RECONCILIATION
    - Reconciliation is the process where the Diffing Algorithm takes place, updating the Actual DOM with the most efficient changes.
    - Diffing Algorithm compares the Virtual DOMs, and based on the comparison, it updates the most efficient one.

## 4. What are Components in React

    - In Vennila JavaScript creating a resuable components is very difficult.
    - components are small snnipets of code put together to make APP easier
    - Component is one of the core building blocks of React
    - React supports two types of architecture:
        - Class-based.
        - Functional-based (the most recent one).

## 5. Explain the building blocks of React?

    - Components: These are reusable blocks of code that return HTML.
    - JSX: It stands for JavaScript and XML and allows you to write HTML in React.
    - Props and State: props are like function parameters and State is similar to variables.
    - Context: This allows data to be passed through components as props in a hierarchy.
    - Virtual DOM: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.

## 6. How do you create component in React
    
    As we there are ttwo types of the components in React
        - Class-based: The class components are a little more complex than the functional components. We can pass data from one class component to another class component. Class based component start with key word called Class
        - Functional-based (the most recent one).