const house = {
    name: "joy apartments",
    open: function(what){
        console.log(`I ${this.name} have opened the ${what}`)
    },
};

house.open('closet');