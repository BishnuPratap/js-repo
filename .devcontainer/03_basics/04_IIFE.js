/*******************************************IIFE MEANS IMMEDIATELY INVOKED FUNCTION EXPRESSION******************/

// An IIFE is a JavaScript function that runs as soon as it is defined.
// It is a design pattern that is used to create a new scope for variables and functions, preventing them from polluting the global scope.

(function chai() { // named iife
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED USING ARROW FUNCTION`);
})();