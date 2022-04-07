 //get a reference of display and buttons 
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

//initaialization of num1 & num 2
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let action = "";

//add EventListeners to buttons
buttons.forEach(btn => btn.addEventListener("click",toDisplay));

//function that runs every time a button is clicked
function toDisplay(btn) {
    if(this.innerText === "AC"){
        display.innerText = "";
    }else {
        if(this.innerText >= 0 && this.innerText <= 9){
            
            if(operator === ""){     
                num1 +=  this.innerText; 
                display.innerText = num1;
            }else{
            num2 += this.innerText;
            display.innerText = num2;
            }
    
        }else if(this.innerText.match(/[+,*,/,=,-]/)){
            if(operator ===""){
                operator =  this.innerText;
                display.innerText = operator;
            }else{
                action =  this.innerText;
                display.innerText = action;
            }console.log ("G action " +action);

            if(num2 !==""){
                operate(operator,num1*1,num2*1);
                display.innerText = result;
                num1 = result.toString();
                num2.innerText = "";
                result.innerText = "";
                operator = action;
                action ="";
                //operator.innerText = "";
            }  
        }
    }
      }
    
 
function add(a,b){
    result = a+b;
    return result;
}
function subtract(a,b){
    result = a-b;
    return result;
}
function multiply(a,b){
    result = a*b;
    return result;
}
function divide(a,b){
    result = a/b;
    return result;
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
        num1="";
        num2="";
        console.log("operate 1 " +num1);
        console.log("operate 2 " +num2);
        return result;             
}



/* 

 */