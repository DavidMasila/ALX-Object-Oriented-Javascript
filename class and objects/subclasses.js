const bear ={
    claws: true, 
    diet: "carnivore", //secretely linked to thier contructor's prototype property
};

function PolarBear(){
    //..
}

PolarBear.prototype=bear;

const snowBall = new PolarBear();
//lets add properties to snowBall
 
snowBall.color="white";
snowBall.favoriteDrink ='Blood';

// color and favoriteDrink are properties that are in snowBall not present in the constractor function.
// snowball has access to its own properties and those in the parent class but not the other way round.

console.log(snowBall.__proto__);
console.log(snowBall.__proto__ === bear);
console.log(Object.getPrototypeOf(snowBall)); //same as __proto__ above
console.log(PolarBear.prototype);