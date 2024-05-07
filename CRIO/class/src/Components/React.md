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

    As we there are two types of the components in React
    - **Class-based**: The class components are a little more complex than the functional components. It requires large boilerplate code. Data can be passed from one class component to another class component.
        - Class based components mainly work in Life Cycle Methods
        - Class-based components start with the keyword "class" and extend to `React.Component`. `React.Component` is the parent class from the React library. There are methods associated with class-based components:

        - Constructor: The constructor method is only required when there is state in the class. It is called when an instance of the component is created.

        - Render: The render method is used to display UI by returning JSX. JSX is JavaScript code template which converts the HTML syntax to React function call. React function calls help to construct the       Virtual DOM, which updates the actual DOM and displays it in the UI.

        example this how react function call help to create a virtualDOM
        JSX code
        const element = <h1>Hello, world!</h1>;
        After Babel transformation
        const element = React.createElement('h1', null, 'Hello, world!');

    - **Functional-based** : You declare a functional component using a JavaScript function. This function returns JSX, JSX stands for JavaScript XML. It allows you to write HTML-like syntax within your JavaScript code.SX makes your components more readable and maintainable

## 7. How do browsers read JSX

    Browsers are not capable of reading JSX directly and only can understand and read pure JavaScript [babel library is used to convert any react code into Java Script that render in the UI]
    The web browsers read JSX with the help of a transpiler. Transpilers are used to convert JSX into JavaScript. The transpiler used is called Babel

## 8. What are States and Props

    - States are more likly a Variable. States are passed with in the component only and States can be modified
    - Props are used to pass data from one component to another mostly props are passed as function argument. Props cannot be modified(immutable)
    - In class based component  both state and props are object => States  act a local variable to that particular component
    - For using states in class based component we need to initlize the constructor method and super keyword bcz we are extending from React.Component

    - In functional component States depends on how you define Props can be used with state and functional components.

## 9. What is JSX?

    - JSX stands for JavaScript XML. It is templating language similar to HTML. It allows us to directly write HTML in React (within JavaScript code)
    - which converts into react functional call...!  => How..?  ==> babel transplier library is used to convert any JSX code into Java Script that render in the UI
    - Once these function are called help to build the Virtual Dom then rendring happens during rendering RECONCILIATION happens and Diffing Algo takes place

## 10. What are Life Cycle Methods in React

    - Life cycle methods how the life cycle of the component is evolved
    - Three Phases of life cycle methods are Mounting Phase, Updation Phase, and Destroying Phase(Unmounting Phase)

    - **Mounting Phase** : there are methods associated with the mounting phase
        - constructor():  This method is called before the component is mounted. It is used for initializing State and binding the event handlers in order to avoid the side effects in this method.

        - render(): This method is mandatory and is responsible for rendering the component's UI based on its current state and props. bcz it return the JSX
        
        - componentDidMount(): This method gets excueted when the component is loaded into the DOM it will get triggred after the first invokation of render method componentDidMount it will only render once in it's entire life cycle.It is commonly used to perform tasks such as fetching data from an API or setting up

    - **Updation Phase** : 
        - componentDidUpdate():This method is triggered whenever there are changes to the state or props. React initiates a re-render, and before this re-render occurs, this method has access to the previous state (prevState) and previous props (prevProps). Compare current props and state with prevState and prevProps if it return true then the component will re-render false other
            
    - **Unmounting Phase** : 
        -This method is called immediately before a component is unmounted and destroyed. It is used to perform cleanup tasks such as removing event listeners or canceling subscriptions.