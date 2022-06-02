//Object.create(); Give us a cleaner method of establishing inheritance. 
/*
Object.create takes in a single object and returns a new object.
That new object's __proto__ property is set to whatever was originally passed into Object.create(). 
*/
const mammal = {
    vertebrate: true,
    earBones: 3
};

const rabbit = Object.create(mammal);

//rabibits inhertits from mammal and has mammal's properties

console.log(rabbit.earBones);

//Rabbit is secretely linked to mammal via __proto__ property

console.log(rabbit.__proto__ === mammal); //confirms it >> true