 //get a reference of display and buttons 
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

//initaialization of variables
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let action = "";


//add EventListeners to buttons
buttons.forEach(btn => btn.addEventListener("click",toDisplay));

//function that runs every time a button is clicked
function toDisplay(btn) {
    if(this.innerText === "CE" && display.innerText !== ""){
        display.innerText = display.innerText.slice(0,-1);

    }else if(this.innerText === "AC"){
         display.innerText = "";
         result = "";
         operator = "";
         action = "";
         num1 = "";
         num2 = "";

    }else {
        if (display.innerText.length >=10){
            return
        }
        if(this.innerText.match(/[0-9,.]/)) {
                if(operator === ""){ 
                    if( this.innerText === "." && (num1.includes("."))){
                        return
                    }
                    num1 +=  this.innerText; 
                    display.innerText = num1;          
                }else{
                    if( this.innerText === "." && (num2.includes("."))){
                        return;
                    }
                    num2 += this.innerText;
                    display.innerText = num2;
                }    
        }else if(this.innerText.match(/[+,*,/,=,-]/)){
            if(operator === "/" && num2 === "0"){ //check for division by 0
                display.innerText = "whaaat?";
                return;
            }
        else if(operator === ""){
                if(this.innerText === "="){
                    return;
                }else{
                    operator =  this.innerText;
                    display.innerText = operator;
                }
            }else{
                action =  this.innerText;
                display.innerText = action;
            }
            if(num2 !==""){
                operate(operator,num1*1,num2*1);
                display.innerText = result
                num1 = result.toString();
                num2.innerText = "";
                result.innerText = "";
                if(action !== "="){
                    operator = action;
                    action = "";
                }else{
                    operator = "";
                    action = "";
                }
                console.log("4operator "+operator);
                console.log("4action "+action);
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
        if(result % 1 != 0){  // check for long decimals and cut to 3
        result = result.toFixed(3);
        } 
        return result;             
}



/* I don't need it       
else if(num1 ==="" || num2 === ""){
                    display.innerText = "Miss num!";
                    return;
                }
 */