const mockingBird ={
    title: "To kill a mocking bird",
    describe: function(){
        console.log(`${this.title} is a classic novel`);
    },
};
//call an instance of the object
mockingBird.describe();
//lets see how the call() method can be used to borrow describe method of mockingbird
const Thor = {
    title: "Love and Thunder",
};

//here it goes

mockingBird.describe.call(Thor); //boom!!
