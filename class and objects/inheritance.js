function Dog(age,weight,name){
    this.age=age;
    this.weight=weight;
    this.name=name;
    /*this.bark = function(){
        console.log(`${this.name} says woof!`) 
    };*/
};

//we can define bark in Dogs's prototype

Dog.prototype.bark=function(){
    console.log(`${this.name} says woof!`);
};

//let's create and instance a dog class

var Doggy = new Dog(2,60,"Ngite");

//lets invoke the bark method
Doggy.bark();
console.log(Doggy instanceof(Dog)); //checking instance of