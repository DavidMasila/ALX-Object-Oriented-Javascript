//isPrototypeOf()
const rodent = {
    favoriteFood :'cheese',
    hasTail: true,
}

function Mouse(){
    this.favoriteFood = "cheese";
};

Mouse.prototype=rodent;

const ralph = new Mouse();
console.log(rodent.isPrototypeOf(ralph));
//true