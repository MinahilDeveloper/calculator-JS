let num1= prompt("Enter first number");
num1=parseFloat(num1);

let num2= prompt("Enter second number");
num2=parseFloat(num2);

let sum= num1+num2;
alert("The sum is "+sum);

let choice= prompt("Which operation do you want to perform? Add, Sub, Mul, Div");

if (choice === "Add")
{
    let result= num1+num2;
    alert("The Addition is "+result);
}

else if(choice === "Sub")
   {
    if(num1>num2) {
        let result= num1-num2;
        alert("The subtraction is "+result);
    }
    else {
        let result= num2-num1;
        alert("The subtraction is "+result);
    }
   }

   else if (choice === "Mul")
    {
        let result= num1*num2;
        alert("The Multiplication is "+result);
    }

   else if (choice === "Div")
       {
        if(num2 === 0)
        {
            alert("Undefinedd(Not divisible by 0)");
        }
        else{
            let result=num1/num2;
            alert("The Quotient is "+result);
        }
       }

       else{
        
        alert("Invalid Number");
       }


