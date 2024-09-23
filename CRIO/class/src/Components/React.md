# React.js README

## 1. What is React

    ReactJS is an open-source JavaScript library developed by Facebook.It is used for building user interfaces and optimized web applications
    It contain set of optimized functions and It is a single page applications in which entire app is used in one single HTML

## 2. Why React

    Start with drawbacks like When dealing with Javascript it contain large boiler plate code modular system designing of the components will become difficult
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
    - Angular is Framework that means it has large ecosystem every things comes under single package including Data manipulation

## 3. Explain the concept of virtual DOM

    Virtual DOM is object like structure similar to Actual DOM but Virtual DOM is light weight and easy to manage It will only contain necessary Mapping elements and it's CSS
    When it comes to actual DOM manipulation it is very expensive Suppose we have "n" of updations , deletations becomes an expensive process and it will degerade the process
    virtual DOM is present and the data flow is always in a single direction.

    For Example

    - Whenever the first state or prop changes, the Virtual DOM will have an exact copy of the actual DOM (V1).
    - Then, the next state or prop update occurs. If there are five clicks, all will be merged into one (V2). From here, React undergoes the process called RECONCILIATION
    - Reconciliation is the process where the Diffing Algorithm takes place, updating the Actual DOM with the most efficient changes.
    - Diffing Algorithm compares the Virtual DOMs, and based on the comparison, it updates the most efficient one.

## 4. What are Components in React

    - In Vanilla JavaScript creating a reusable components is very difficult.
    - components are small snippets of code put together to make APP easier
    - Component is one of the core building blocks of React
    - React supports two types of architecture:
        - **Class-based**.
        - **Functional-based** (the most recent one).

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

    - **Functional-based** : You declare a functional component using a JavaScript function. This function returns JSX, JSX stands for JavaScript XML. It allows you to write HTML-like syntax within your JavaScript code. JSX makes your components more readable and maintainable

## 7. How do browsers read JSX

    Browsers are not capable of reading JSX directly and only can understand and read pure JavaScript [babel library is used to convert any react code into Java Script that render in the UI]
    The web browsers read JSX with the help of a transpiler. Transpilers are used to convert JSX into JavaScript. The transpiler used is called Babel

## 8. What are States and Props

    - States are more likely a Variable. States are passed with in the component only and States can be modified
    - Props are used to pass data from one component to another mostly props are passed as function argument. Props cannot be modified(immutable)
    - In class based component  both state and props are object => States  act a local variable to that particular component
    - For using states in class based component we need to initialize the constructor method and super keyword bcz we are extending from React.Component

    - In functional component States depends on how you define Props can be used with state and functional components.

## 9. What is JSX?

    - JSX stands for JavaScript XML. It is template language similar to HTML. It allows us to directly write HTML in React (within JavaScript code)
    - which converts into react functional call...!  => How..?  ==> babel transpiler library is used to convert any JSX code into Java Script that render in the UI
    - Once these function are called help to build the Virtual Dom then rendering happens during rendering RECONCILIATION happens and Diffing Algo takes place

## 10. What are Life Cycle Methods in React

    - Life cycle methods how the life cycle of the component is evolved
    - Three Phases of life cycle methods are Mounting Phase, Updating Phase, and Destroying Phase(Unmounting Phase)

    - **Mounting Phase** : there are methods associated with the mounting phase

        - constructor():  This method is called before the component is mounted. It is used for initializing State and binding the event handlers in order to avoid the side effects in this method.

        - render(): This method is mandatory and is responsible for rendering the component's UI based on its current state and props. bcz it return the JSX

        - componentDidMount(): This method gets executed when the component is loaded into the DOM it will get triggered after the first invocation of render method componentDidMount it will only render once in it's entire life cycle.It is commonly used to perform tasks such as fetching data from an API or setting up

    - **Updating Phase** :

        - componentDidUpdate():This method is triggered whenever there are changes to the state or props. React initiates a re-render, and before this re-render occurs, this method has access to the previous state (prevState) and previous props (prevProps). Compare current props and state with prevState and prevProps if it return true then the component will re-render false other

    - **Unmounting Phase** :

        -This method is called immediately before a component is unmounted and destroyed. It is used to perform cleanup tasks such as removing event listeners or canceling subscriptions.
        {this will happen only with conditional rendering}

## 11. What are keys in React

    - Keys are special String attribute. It has unique Identifiers for the react element. keys are mainly used for dynamic list rendering in UI
    For example if you want to update or delete in a list key plays major role

## 12. Explain the creation of a List in react?

    - Lists are very useful when it comes to developing the UI of any website. Lists are mainly used for displaying menus on a website, for example, the navbar menu

## 13. What are hooks in React

    - Hooks are used in functional Components
    - Major problem in class based components. sharing Business logic across different component and Higher order component (HOC) passing one component to other component that return new component is not scalable
    - Hooks are the Native React API's(functions) which interact with different aspects of React. Hooks are the independent that are shared we can reuse our business logic by converting hook and reuse them in the component
    - If we want use hook we need prefix like "useXXX" and some the important hooks are "useState" , "useEffect" ect..
    - For Example: if we want to create a custom hook like "**useWindowResizer**" that allows you to track and resize the window size and determine the screen size based on the width:

## 14. How do you handle events in React

    - Event handling work very different in different browsers(FireFox, Safari) React team came with new system in React that is Synthetic events
    - Synthetic events in React have the same interface as actual DOM events
    - Synthetic Events are new way of handling the events in react like event object is attached to root element and this root element will caputre then it will check what is happening in the react application {It will capture with the help of event bubbling}
Key Features of Synthetic Events
Normalization:
    . For instance, properties and methods of native events (like event.target, event.preventDefault(), etc.)
    
Event Pooling
    event.persist() to retain the event object for asynchronous operations.

Bubbling:

Event Types: 
React provides synthetic events for various types of interactions, including mouse events (onClick, onMouseEnter, etc.), keyboard events (onKeyPress, onKeyDown, etc.), and form events (onChange, onSubmit, etc.)

## 15. What is useState in React and How it is used in React

    - useState is one of the most useful hook in React which comes from react native API. It allows functional components to manipulate DOM elements before each render
    - useState is function that return the array of two items the first one State in which is used as variable and the second one is Updater function which update the that particular State {if we want use default value we use directly i.e useState("DefaultValue")}
    - if we want to update the state there are two ways

        - First way is by using call back it will accept the read mate(sample) value
        - When updating state with a callback function, you can access the previous state (also known as the current state) as an argument in the callback.
        - This method ensures that you're always working with the latest state, even if state updates are batched or asynchronous.
        - For Example ==> setCount(prevCount => prevCount + 1); // Using callback to update state

        - If it Object we need take a copy of Object abd then new property bcz all the other properties will erase
        - When updating state with an object, you should not directly modify the state variable. Instead, create a new object that represents the updated state.
        - This ensures that you're not mutating the original state, which could lead to unexpected behavior and bugs
        -  If the state is an object, you need to take a copy of the object and then update the specific property you want to change. This is because updating a single property directly will erase all other properties.
        - For Example ==> setUser(prevUser => ({ ...prevUser, name: 'Jane' }));

## 16. Explain useEffect in React and How does it work

    - useEffect is one of the most useful hook in React which comes from react native API. useEffect will perform side Effects of the Application it similar to Life cycle method in class based component.
    - useEffect will accept two parameters on is callback function and other one is dependency array ==> useEffect( () => callback {function}, [dependency array])
    - useEffect will executes asynchronous functions like API calls, functional calls, Network calls
    - useEffect will accepts the callback and get executed when the useEffect will runs
    - useEffect will run after the first return of the JSX. It will at least run once in a functional component. useEffect will accept two parameters on is callback function and other one is dependency array. if dependency array is not there the useEffect will runs continuously when every state or prop changes
    dependency array will tell when to execute after the executing of the at least once
    - After the first return it will get executed post that based on what is there in the dependency array("["State" or "Prop"]") that will get executed
    - If Dependency Array ("[ ]") is empty State or Prop is get trapped bcz there when State or Prop goes into array there will be no items in the array then useEffect will run only once
    - if Dependency Array("["State" or "Prop"]") has a value then it will check State or Prop is updated then useEffect wil get triggered again
    - Now useEffect will also have return function which is called as clean up function. this is used when the component get removed then return statement will get executed this is because to avoid memory leaks
