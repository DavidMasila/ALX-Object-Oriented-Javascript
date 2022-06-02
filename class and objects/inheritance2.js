//prototype chain

function Hamster(){
    this.hasFur = true;
};

let waffle = new Hamster();
let pancake = new Hamster();

Hamster.prototype.eat=function(){
    console.log('chomp chomp chomp')
};

console.log(waffle.hasFur);
waffle.eat();
console.log(pancake.hasFur);
pancake.eat();

//update prototype

Hamster.prototype = {
    isHungry: false,
    color: 'brown'
};
//adding properties to the Hamster class

//the previous objects will not have access to the updated prototype
waffle.color; //undefined
pancake.color; //undefined

//lets create new object

const muffin = new Hamster();
console.log(muffin.color);
console.log(muffin.isHungry);
console.log(muffin.hasFur) // can access all previous properties
