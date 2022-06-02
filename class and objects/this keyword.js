function Cat(name){
    this.name=name;
    this.sayName=function(){
        console.log(`Meow!! My name is ${this.name}`)
    };
};

const cat1= new Cat('PussPuss');
cat1.sayName();

//when is this assigned
//Assigned only whenan object calls the method where this is used. 
//lets create an object

const dog ={
    bark: function(){
        console.log("Woof!")
    },
    barkTwice: function(){
        this.bark();
        this.bark();
    },
};

dog.bark();
dog.barkTwice();

/*this.bark() tells the barkTwice method to look at the dog object. 
Having just back(), would have made the function to look for variable back
locally and then in the global scope is not foound
*/

