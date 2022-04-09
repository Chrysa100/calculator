 //get a reference of display and buttons and keyboard
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');


//initaialization of variables
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let action = "";
 
// first part is when the user clicks on a screen button
  
//add EventListeners to buttons
buttons.forEach(btn => btn.addEventListener("click",toDisplay));

//function that runs every time a button is clicked
function toDisplay(btn) {
    if(this.innerText === "CE" && display.innerText !== ""){ // clicked ClearEntry
        display.innerText = display.innerText.slice(0,-1);
        num1 = display.innerText;

    }else if(this.innerText === "AC"){  // clicked AllClear
        display.innerText = "";
        result = "";
        operator = "";
        action = "";
        num1 = "";
        num2 = "";

    }else {
        if (display.innerText.length >=10){  // don't allow screen overflow
            return
        }
        if(this.innerText.match(/[0-9,.]/)) { //clicked on a number or dot
                if(operator === ""){ 
                    if( this.innerText === "." && (num1.includes("."))){ //don't allow multiple "." in num1
                        return
                    }
                    num1 +=  this.innerText; 
                    display.innerText = num1;          
                }else{
                    if( this.innerText === "." && (num2.includes("."))){ //don't allow multiple "." in num2
                        return;
                    }
                    num2 += this.innerText;
                    display.innerText = num2;
                }    
        }else if(this.innerText.match(/[+,*,/,=,-]/)){  //clicked on an operator
            if(operator === "/" && num2 === "0"){ //don't allow division by 0
                display.innerText = "whaaat?";
                return;
            }
        else if(operator === ""){
                if(this.innerText === "="){  // don't allow to put "=" before operator
                    return;
                }else{
                    operator =  this.innerText;
                    display.innerText = operator;
                }
            }else{
                action =  this.innerText;  // hold temporarly the new operator
                display.innerText = action;
            }
            if(num2 !==""){
                operate(operator,num1*1,num2*1); //call the math function now
                display.innerText = result
                num1 = result.toString();
                num2.innerText = "";
                result.innerText = "";
                if(action !== "="){   //if there is more to operate
                    operator = action;  //pass the temporar operator to the main operator
                    action = "";
                }else{
                    operator = "";
                    action = "";
                }
            }  
        }
    }     
}


//the below lines take place when user strikes a key 
document.addEventListener('keydown', toScreen);

 function toScreen (e){
   
    if(e.key === "Backspace" && display.innerText !== ""){ 
        display.innerText = display.innerText.slice(0,-1);
        num1 = display.innerText;

    }else if(e.key === "Delete"){  
         display.innerText = "";
         result = "";
         operator = "";
         action = "";
         num1 = "";
         num2 = "";

    }else {
        if (display.innerText.length >=10){  // don't allow screen overflow
            return
        }
        if(e.key.match(/[0-9,.]/)) { 
                if(operator === ""){ 
                    if( e.key === "." && (num1.includes("."))){ //don't allow multiple "." in num1
                        return
                    }
                    num1 +=  e.key; 
                    display.innerText = num1;          
                }else{
                    if( e.key === "." && (num2.includes("."))){ //don't allow multiple "." in num2
                        return;
                    }
                    num2 += e.key;
                    display.innerText = num2;
                }    
        }else if(e.key.match(/[+,*,/,Enter,-]/)){  
            if(operator === "/" && num2 === "0"){ //don't allow division by 0
                display.innerText = "whaaat?";
                return;
            }
        else if(operator === ""){
                if(e.key === "Enter"){ 
                    return;
                }else{
                    operator =  e.key;
                    display.innerText = operator;
                }
            }else{
                action =  e.key;  // hold temporarly the new operator
                display.innerText = action;
            }
            if(num2 !==""){
                operate(operator,num1*1,num2*1); //call the math function now
                display.innerText = result
                num1 = result.toString();
                num2.innerText = "";
                result.innerText = "";
                if(action !== "Enter"){   //if there is more to operate
                    operator = action;  //pass the temporar operator to the main operator
                    action = "";
                }else{
                    operator = "";
                    action = "";
                }
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


