function remember (number){
    return function(){
        return number;
    };
};

const returnedFunction = remember (5);
console.log(returnedFunction())

//another one

const myName ="David";
function introduceMyself(){
    const you ='student';
    function introduce(){
        console.log(`Hellow ${you}, I am ${myName} your Tutor`);
    };
    return introduce();
};

introduceMyself();

//Dj khaled - Another one

const number =3;

function myFunct(){
    const otherNumber  =1;
    function logNumber(){
        console.log(otherNumber) //
    }
};

// another one 

function outerFunction() {
    let num1 = 5;
  
    return function(num2) {
      console.log(num1 + num2);
    };
  };
  
const result = outerFunction();
outerFunction()(10); // another way pf accessing the inner function and assigning a parameter
result(10);

//some more examples

