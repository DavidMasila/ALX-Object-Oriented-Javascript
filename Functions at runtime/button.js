const button = document.getElementById('button');

//lets add an even listener to button and listen for click event

button.addEventListener('click', (function(){
    let count = 0;
    return function (){
        count +=1;

        if (count===2){
            alert('This alert appears after very press');
            count =0;
        };
    };
})());

