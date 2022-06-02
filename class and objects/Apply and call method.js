const cat ={
    name: 'PussPuss'
};

function sayHello(message){
    console.log(`${message} ${this.name}`)
};

//we are going to use call() method

sayHello.call(cat, "Hi there!");
//In thsi call we bind the object cat wi enable borrowing of the property name

//now let's see apply()
sayHello.apply(cat, ['Hello!'])

//apply needs the parameters in an array. But first we bind to the object cat.
