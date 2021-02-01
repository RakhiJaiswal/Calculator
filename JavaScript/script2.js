"use strict";
var operator1="";
var operand1="";
var arrOfOperands=[];
var arrOfOperators=[];
var flag = true;
function disp(args)
{
    if( args.match(/[0-9.]/) )
    {
        //collecting number
        if(args == '.'){
            if(flag){
                operand1 += args;  
            }
        }
        else{
            operand1 += args; 
        }
    }
    else 
    { 
        arrOfOperands.push(operand1);
        console.log(operand1);
        operand1="";
        operator1=args; 
        arrOfOperators.push(operator1);
        operator1="";
        flag = true;
        if ( arrOfOperands.length == 2)  
        {
            var sum;
            var num1 = Number(arrOfOperands.shift());
            var num2 = Number(arrOfOperands.shift());
            var op = arrOfOperators.shift();
            switch(op)
            {
                case '+' :  sum = num1+num2;
                break;
                case '-' :  sum = num1-num2;
                break;
                case 'x' :  sum = num1*num2;
                break;
                case '/' :  sum = num1/num2;
                break;
                default : sum=0;
            }
            arrOfOperands.unshift(sum);
            var x = document.getElementById("myTable").rows[0].cells;
            x[0].innerHTML = sum;
        }
        if( args.match(/[=]/))
        {
            var x = document.getElementById("myTable").rows[0].cells;
            x[0].innerHTML = arrOfOperands[0];
        }
    }
    //displaying argument on display screen
    var x = document.getElementById("myTable").rows[0].cells;
    if(args == '.'){
        if(flag){
            x[0].innerHTML +=args;
            flag = false;
        }
    }
    else{
        x[0].innerHTML +=args;
    }

} 
// on pressing ac button
document.getElementById("clear").onclick = function()
{
    var x = document.getElementById("myTable").rows[0].cells;
    x[0].innerHTML ="";
    arrOfOperands=[];
    arrOfOperators=[];
    operator1="";
    operand1="";
    flag = true;
}