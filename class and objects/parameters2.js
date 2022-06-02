function Hero(name,hero){
    this.name=name;
    this.hero=hero;
    this.introduce=function(){
        console.log(`I am ${this.name} and my hero is ${this.hero}`)
    };
};

const Masila = new Hero("Masila","Father"); //creating objects. 
const Antony = new Hero("Anto","Mother");

Masila.introduce();
Antony.introduce();

console.log(Masila.name); //accessing the properties.
