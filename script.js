 //get a reference of the parent div
 const buttons = document.querySelector(".buttons");  
//create the buttons
const clear = document.createElement('button');


function add(a,b){
    console.log(a+b);
    return a+b;
}
function subtract(a,b){
    console.log(a-b);
    return a-b;
}function multiply(a,b){
    console.log(a*b);
    return a*b;
}
function divide(a,b){
    console.log(a/b);
    return a/b;
}

function operate(operator,a,b){
    switch (operator){
        case "+" : add(a,b);
        break;
        case "-" : subtract(a,b);
        break;
        case "*" : multiply(a,b);
        break;
        case "/" : divide(a,b);
        }
}

operate("*",4,3);
operate("/",4,3);
operate("-",4,3);

/*
add(5,3);
subtract(3-5);
multiply(2*5);
divide(5/4);
*/