function Mammal(animal){    //contructor function
    this.animal=animal;
    this.vertebrate = true;
    this.blood = 'warm';
}


Mammal.prototype.edible=function(){
    console.log(`If ${this.animal} is closely related to chicken its edible`);
};

const hare= new Mammal("Rabbit");

hare.edible();

hare.fur=true;
hare.speed='fast';

console.log(hare.speed);
