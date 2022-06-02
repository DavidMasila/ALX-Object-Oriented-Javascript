//without bind()
//bind is method called directly onto a function. 
function invokeTwice(cb) {
    cb();
    cb();
};
 
const dog = {
   age: 10,
   growOneYear: function () {
     this.age += 1;
   },
};

dog.growOneYear();

dog.age; 
// 6

invokeTwice(dog.growOneYear);

dog.age;
// 6
//The age value doesnt seem to cahnge after invoking twice and placing dog's function grow one year

//With bind() method

const myGrow=dog.growOneYear.bind(dog);
invokeTwice(myGrow);

console.log(dog.age);

//now the age is 8. It invoked Twice.
