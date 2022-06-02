/*

Declare a function named `higherOrderFunction` that takes no arguments,
and returns an anonymous function.

The returned function itself takes no arguments as well, and simply
returns the number 8.

*/

function higherOrderFunction (){
    return function (){
        console.log(8);
    };
};

//higherOrderFunction()(); //in order to cess both functions
const InnerFunction = higherOrderFunction ();
InnerFunction();