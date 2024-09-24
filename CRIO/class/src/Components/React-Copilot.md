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



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# React Performance Optimization Guide

## 1. Use React.memo for Component Memoization

`React.memo` is a higher-order component that can prevent unnecessary re-renders of functional components.

```jsx
import React from "react";

const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

// Or with arrow function
const MyComponent = React.memo((props) => {
  /* render using props */
});
```

## 2. Implement shouldComponentUpdate for Class Components

For class components, you can use `shouldComponentUpdate` to prevent unnecessary re-renders.

```jsx
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Return true if you want it to update
    return nextProps.id !== this.props.id;
  }

  render() {
    return <div>{this.props.id}</div>;
  }
}
```

## 3. Use the useCallback Hook

`useCallback` returns a memoized version of the callback that only changes if one of the dependencies has changed.

```jsx
import React, { useCallback } from "react";

function MyComponent({ item, onItemClick }) {
  const handleClick = useCallback(() => {
    onItemClick(item);
  }, [item, onItemClick]);

  return <button onClick={handleClick}>Click me</button>;
}
```

## 4. Utilize the useMemo Hook

`useMemo` can be used to memoize expensive computations.

```jsx
import React, { useMemo } from "react";

function MyComponent({ data }) {
  const processedData = useMemo(() => {
    return expensiveOperation(data);
  }, [data]);

  return <div>{processedData}</div>;
}
```

## 5. Virtualize Long Lists

For long lists, use a virtualization library like `react-window` to render only the visible items.

```jsx
import React from "react";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

const MyList = () => (
  <List height={400} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);
```

## 6. Code-Splitting with React.lazy and Suspense

Use dynamic imports to split your code and lazy-load components.

```jsx
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

## 7. Avoid Anonymous Functions in Render

Instead of using anonymous functions in render, define them outside or use class methods.

```jsx
// Avoid
<button onClick={() => this.handleClick()}>Click me</button>

// Better
<button onClick={this.handleClick}>Click me</button>
```

## 8. Use Production Build

Always use the production build of React for deployment. It's smaller and faster.

```bash
npm run build
```

## 9. Implement PureComponent for Class Components

`PureComponent` implements `shouldComponentUpdate` with a shallow prop and state comparison.

```jsx
import React, { PureComponent } from "react";

class MyComponent extends PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}
```

## 10. Avoid Inline Object Creation in JSX

Creating objects inline in JSX can lead to unnecessary re-renders. Define them outside the render method.

```jsx
// Avoid
render() {
  return <MyComponent style={{ margin: 0 }} />;
}

// Better
const style = { margin: 0 };
render() {
  return <MyComponent style={style} />;
}
```

## 11. Use Fragment to Avoid Additional HTML Element Wrappers

```jsx
import React, { Fragment } from "react";

function MyComponent() {
  return (
    <Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </Fragment>
  );
}
```

## 12. Profiling with React DevTools

Use the React DevTools profiler to identify performance bottlenecks in your application.

```jsx
import React, { Profiler } from "react";

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // Log or send to analytics
}

function MyComponent() {
  return (
    <Profiler id="MyComponent" onRender={onRenderCallback}>
      <div>My Component Content</div>
    </Profiler>
  );
}
```

By implementing these techniques, you can significantly improve the performance of your React application. Remember to measure the impact of each optimization and focus on the areas that provide the most significant improvements for your specific application.


Arrow Function
1).Uses a concise syntax, often without the function keyword.
		const add = (a, b) => a + b;
		
2).Does not have its own this. It lexically binds this, meaning it uses the this value from the surrounding context.
					const obj = {
				value: 42,
				getValue: function() {
					const innerFunc = () => this.value; // 'this' refers to 'obj'
					return innerFunc();
				}
			};

3).Does not have its own arguments object. To access arguments, you need to use rest parameters.
				const myFunc = (...args) => {
					console.log(args);
				};

4).Cannot be used as constructors and will throw an error if you try to use new with them.
			const Person = (name) => {
			this.name = name; // Error if used with 'new'
		};

Normal Function
1).Requires the function keyword.
			function add(a, b) {
				return a + b;
			}
			
2).Has its own this, which can vary depending on how the function is called.
		const obj = {
			value: 42,
			getValue: function() {
				function innerFunc() {
					return this.value; // 'this' refers to the global object or undefined in strict mode
				}
				return innerFunc();
			}
		};
		
3).Has its own arguments object, which is an array-like object representing the arguments passed to the function
		function myFunc() {
			console.log(arguments);
		}
		
4). Can be used as constructors with the new keyword.
		function Person(name) {
		this.name = name;
	}


What are the optimization techniques in React applications
1).Memoization:
	React.memo: Wrap functional components to prevent re-renders when props haven't changed.
	useMemo and useCallback: Use these hooks to memoize values and functions, respectively, to avoid unnecessary computations
2).Pure Components:
	Use React.PureComponent for class components to automatically handle shallow prop and state comparisons.
3).Code Splitting:
	Utilize dynamic imports and React’s Suspense to load components or routes only when needed. This reduces the initial load time.
4).Virtualization:
	Use libraries like react-window or react-virtualized for rendering large lists efficiently by only rendering items in view.
5.)Avoiding Inline Functions:
	Define functions outside of render methods to prevent creating new function instances on each render.
6.)Optimizing Context Usage:
	Use multiple contexts or separate providers to avoid unnecessary re-renders of components that don't depend on certain pieces of context.
7.)Server-Side Rendering (SSR):
	Consider using frameworks like Next.js for SSR to improve initial load times and SEO.
8).Reduce Bundle Size:
	Analyze your bundle with tools like Webpack Bundle Analyzer and remove unnecessary libraries or use tree-shaking
9)Using the Production Build:
	Always deploy a production build (npm run build) for optimal performance, as it minifies and optimizes your code
10).Use a CDN
	Use a Content Delivery Network (CDN) to make your app faster and more efficie



Difference between Var let const
Var:
Function Scopped or Global Scopped if declared inside the function it can be accessable any where in the function scope
If declared outside, it is globally accessible.
Hoisting
var:Variable can be hoisted and moved to top of their scope i.e they can be accessed before deceloration but they will be undefined untill the line of deceloration is reached
var: Variable can be declared with var can be reassigned any number of times

Let
let is block-scoped , it is accessable with in the block (i.e Curly braces) in which is defined
Hoisted let cannot be accessed until the deceloration is reached (this is known as temporal dead zone)
Variables declared with let can also be reassigned.

Const
similar to let, const variables are block-scoped it cannot be reassigned after its initial assignment
Similar to let, const variables are hoisted but cannot be accessed until their declaration.
Variables declared with const cannot be reassigned. However, if the variable is an object or array, its properties or elements can still be modified.



