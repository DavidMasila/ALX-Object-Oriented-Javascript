let diana = (function (){
    let secretIdentity = 'Diana Prince';

    return {
        introduce: function(){
            console.log(`Hi i am ${secretIdentity}`)
        },
    };
})();

console.log(diana.secretIdentity);
//undefined

diana.introduce();

//cannot access variables but you can run the functions. 

function introduction(){
    let secretIdentity = 'Masila David';

    return{
        introduce: function(){
            console.log('Hi, i am ' + secretIdentity);
        },
    };
};

introduction.secretIdentity = "Mwendwa Masila";
console.log(introduction.secretIdentity);

const myself = introduction();
myself.introduce();

//no privacy unlike the IIFE above wehere we cannot access the secretIdentity;
