 //get a reference of display and buttons 
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

//initaialization of num1 & num 2
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

//initialization of innerText
display.innerText = num1;

//add EventListeners to buttons
buttons.forEach(btn => btn.addEventListener("click",toDisplay));

//function that runs every time a button is clicked
function toDisplay(btn) {
    
    if(this.innerText >= 0 && this.innerText <= 9){
        if(operator ===""){     
            num1 +=  this.innerText; 
            display.innerText = num1;
            console.log ("anum1 " +num1);
            console.log ("anum2 " +num2);
            
        }else{
            num2 += this.innerText;
            display.innerText += num2;
            console.log ("bnum1 " +num1);
            console.log ("bnum2 " +num2);        
            
        }
    }else if(this.innerText.match(/[+,*,/,-]/)){
        operator =  this.innerText;
        display.innerText += operator;

    }else if(this.innerText === "="){
        console.log ("onum1 " +num1);
        console.log ("onum2 " +num2);
        display.innerText += this.innerText;
        operate(operator,num1*1,num2*1);
        display.innerText = result;
        num1 = result.toString();
        num2="";
        console.log ("num1 " +num1);
        console.log ("num2 " +num2);
        console.log(typeof(num1));
        console.log(typeof(num2));
        
       
        //return num1;
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
        return result;             
}




