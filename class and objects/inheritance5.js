//Object.getPrototypeOf()
/*Used when you are unsure what a certain object's prototype is*/
const rodent = {
    favoriteFood :'cheese',
    hasTail: true,
}

function Mouse(){
    this.favoriteFood = "cheese";
};

Mouse.prototype=rodent;

const ralph = new Mouse();

console.log(Object.getPrototypeOf(ralph));
//{ favoriteFood: 'cheese', hasTail: true }