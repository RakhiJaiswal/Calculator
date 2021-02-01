"use strict";
var operator1="";
var operand1="";
var arr=[];
function disp(args)
{
        if( args.match(/[0-9.]/) )
         {
        operand1 += args;
        }
        else 
        { 
            if( args.match(/[=]/))
            {
                arr.push(operand1);
                operand1="";   
            }
            else
            { 
       operator1=args;      
       arr.push(operand1);
       operand1="";
       arr.push(operator1);
        operator1="";     
       }
    }
       if( args.match(/[=]/))
       {
          
        while (arr.length>1)
        {
            var num1 = Number(arr.shift()) ;
            console.log( "value of num1 " + num1);
            var opr = arr.shift();
            console.log( "value of opr " +opr);
            var num2 = Number(arr.shift());
            console.log("value of num2 " +num2);
            var sum; 
            
            switch(opr)
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
            arr.unshift(sum);
        }
        var x = document.getElementById("myTable").rows[0].cells;
   x[0].innerHTML = arr[0];
    }
   var x = document.getElementById("myTable").rows[0].cells;
   x[0].innerHTML += args;

} 
var c = document.getElementById("clear");
c.onclick = function()
{
    var x = document.getElementById("myTable").rows[0].cells;
    x[0].innerHTML ="";
}