const Andrew = {
    name: 'Andrew',
    introduce: function () {
      console.log(`Hi, my name is ${this.name}!`);
    }
  };

  const Richard = {
    name: 'Richard',
    introduce: function () {
      console.log(`Hello there! I'm ${this.name}.`);
    }
  };

Richard.introduce.call(Andrew); //we want andrew to use Richard's method
Andrew.introduce.call(Richard); //we want Richard to use Andrew's method

//another example

const David = {
    name: 'David'
};
  
function introduce(language) {
    console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
};

introduce.call(David, "Python");
introduce.apply(David, ['Javascript']);