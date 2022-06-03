let sodiumChloride = (function(){
    let chemicalFormular ='NaCl';
    let molarMass = 58.44;

    return{
        getProperties: function(){
            console.log(`Formular: ${chemicalFormular}`);
            console.log(`Molar Mass: ${molarMass} g/mol`);
        }
    };
})();

sodiumChloride.getProperties();

//IIFE are good for privacy.
//The variables cannot be accessed from the outside world

let person = (function () {
    let name = 'Veronika';
  
    return  {
      getName: function () {
        return name;
      },
      setName: function (myName){
        name = myName;
      },
    };
})();
  
person.name;
  // undefined
person.getName;
  // 'Veronika'
  
person.setName('Not Veronika');
person.getName;
  // 'Not Veronika'