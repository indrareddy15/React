
//Error Object
// const error = new Error('This is an error message');
// console.log(error.stack);
// console.log(error.message);
// throw new Error('This is an error message');

// // custom error
// class Customerror extends Error {
//     constructor (message) {
//         super(message);
//         this.error = "This is custom error message";
//     }
// }

// module.exports = Customerror;

// async function doSomething() {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(await data.json());
// }

// try {
//     doSomething();
// } catch (error) {
//     console.log("error.message");
//     console.log(error);
// }


// uncaughtException

process.on('uncaughtException', (error) => {
    console.log(error);
    console.log('Uncaught Exception');
    process.exit(1);
});


// Error Objects
// Custom Error Object
// Handling Exceptions using Try/Catch 
// Catching Uncaught Exceptions
// Exceptions with promises
// Error handling with async/await