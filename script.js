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
            
            if(operator ===""){
                if(this.innerText === "="){
                    return;
                }else{
                    operator =  this.innerText;
                    display.innerText = operator;
                    console.log("1operator "+operator);
                    console.log("1action "+action);
                }
            }else{
                action =  this.innerText;
                display.innerText = action;
                console.log("2operator "+operator);
                console.log("2action "+action);
            }
            if(num2 !==""){
                operate(operator,num1*1,num2*1);
                display.innerText = result.toFixed(2);
                num1 = result.toString();
                num2.innerText = "";
                result.innerText = "";
                console.log("3operator "+operator);
                console.log("3action "+action);
                if(action !== "="){
                    operator = action;
                    action = "";
                }else{
                    operator = "";
                    action = "";
                }
                console.log("4operator "+operator);
                console.log("4action "+action);
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
        return result;             
}



/* 

 */