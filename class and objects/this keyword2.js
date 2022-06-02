function named(name){
    nameIs = 'david'
    return function(nameed){
        fullName = nameIs + " " + name + " "+ nameed
        return fullName;
    };
};

const fullNames = named("Masila");
console.log(fullNames("mwendwa"));

//
 const myself = {
     firstName: "David",
     secondName: "Mwendwa",
     fullName: function(third){
         fullnames = `${this.firstName} ${this.secondName} ${third}`;
         return fullnames;
     },
 };

const fullyNamed=myself;
console.log(fullyNamed.firstName);
console.log(fullyNamed.fullName("Masila"));

