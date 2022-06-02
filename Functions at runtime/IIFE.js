//having parenthsisia round a functions amkes it an IIFE
//having parenthesis at the end makes it invoked immediately


(function logger(){
    console.log('Hellow world')
})();

//passing arguments into IIFE

(function (name){
    alert (`Hi, ${name}`);
})("masila");

//Another example

(function (x,y){
    console.log(x*y);
})(2,4);

//IIFE's and Private Scope

const myFunction = (
    function () {
      const hi = 'Hi!';
      return function () {
        console.log(hi);
      }
    }
  )();

myFunction();

//Alternative Syntax
(function sayHi(){
    alert('Hi there!');
})();

(function sayHi(){
    alert('Hi, there');
}());

//The have the same outcome
