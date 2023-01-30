
//Relational Operator = >, >=, <, <=, ==, ===, !=, !== 
//Logical Operator =  and Operator(&&), OR Operator (||), Not Operator(!)
// Using loop in a array
/*
var Array = [10,20,30,40,50,60,70,80,90,100];
 var sum = 0;
for (i = 0; i<10; i++)
{
    sum = sum + Array[i];
}
console.log("Result is :" +" " + sum);
*/


// Create a IIFEs( Immediately invokeable Function Expressions ) Function

(function Add(number1 , number2)
{
    var sum = number1 + number2;
    document.write("addition = " + sum +"<br>");
})(20,22);
document.write("<br>");

// Create a traditional function 


function Addition(number1,number2)
{
    var x = number1 + number2;
    document.write("addition = " + x +"<br>");
}
function Subtraction(number1,number2)
{
    var x = number1 - number2;
    document.write(" Subtraction = " + x +"<br>");
}
function Multiplication(number1,number2)
{
    var x = number1 * number2;
    document.write("Multiplication = " + x +"<br>");
}
function Divide (number1,number2)
{
    var x = number1 / number2;
    document.write("Divide = " + x +"<br>");
}
function Remainder (number1,number2)
{
    var x = number1 % number2;
    document.write("Remainder = " + x +"<br>");
}

Addition(10,20);
document.write("<br>");
Subtraction(30,10);
document.write("<br>");
Multiplication(5,15);
document.write("<br>");
Divide(100,5);
document.write("<br>");
Remainder(100,3);


/*
//Ternary Operator 
var num1 = parseInt( prompt( "Enter the first number : "))  ;
var num2 = parseInt( prompt( "Enter the second number : ")) ;
var num3 = parseInt( prompt( "Enter the thart number : ")) ;

var result = (num1>num2 && num1>num3 ? "First number is large" : num2>num1 && num2>num3 ? " Second number is large " : " Third number is large");

document.write(" Result is  : " + result);
*/


/*
//While Loop 

var m = parseInt(prompt("Enter the first number :")) ;
var n = parseInt(prompt("Enter the last number :"));
var i = m;
var sum = 0;
while(i <= n)
{
    if (i % 3 == 0 && i % 4 == 0)
    {
        document.write(" "+"Showing the number : "+"  " +i )
        sum = sum + i;
    }
   
    i++;
}
 document.write(" "+"Result = " +sum) 
 
*/


/*
//Switch 
var digit = prompt("Enter any digit :");

switch(digit)
{
    case "0": 
        document.write("zero");
        break;
    case "1":
        document.write("one");
        break;
    case "2": 
        document.write("two");
        break;
    case "3":
        document.write("three");
        break;
    case "4": 
        document.write("four");
        break;
    case "5":
        document.write("five");
        break;
    case "6": 
        document.write("six");
        break;
    case "7":
        document.write("seven");
        break;
    case "8": 
        document.write("eight");
        break;
    case "9":
        document.write("nine");
        break;
    default :
        document.write("not a digit")
}
 */


/*
// THE LETTER YOU HAVE GIVEN IS VOWEL OR CONSONANT ?

var letter = prompt(" Please give a letter :");

if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U")
{
    document.write(" Your given letter is vowel :" + " " + letter)
}
else if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
{
    document.write(" Your given letter is vowel :" + " " + letter)
}

else
 {
    document.write(" Your given letter is consonant :" + " "+ letter)
}
*/


//Find the greater then number 
/*
var num1 = prompt("Enter the value of One : ");
var num2 = prompt("Enter the value of Two : ");
var num3 = prompt(" Enter the value of Three :");

if ( num1 > num2 && num1 > num3)
{
    document.write("Your given number is :"+" "+num1);

}
else if (num2 > num1 && num2 > num3)
{
    document.write(" Your given number is :"+" "+num2);
}
else 
{
    document.write("Your given number is :" +" "+num3)
}
*/
// letter grade
/*/
var marks = prompt("Enter Your Marks :");
debugger;
if ( marks > 100 || marks < 0)
{ 
    document.write("Sorry your Greate is invalide.")
}

else if(marks>= 80 && marks <= 100)
{
    document.write("Your Greate is :  A+");
}
else if(marks>=70 && marks <= 79)
{
    document.write("Your Greate is :  A");
}
else if(marks>=60 && marks <= 69)
{
    document.write("Your Greate is :  A-");
}
else if(marks>=50 && marks <= 59)
{
    document.write("Your Greate is :  B+");
}
else if(marks>=40 && marks <= 49)
{
    document.write("Your Greate is :  B");
}
else if(marks>=33 && marks <= 39)
{
    document.write("Your Greate is :  C");
}
else
{
    document.write("Sorry your are fail !!");
}

*/


/*

//Conversion Celsius to Fahrenheit

var Celsius = (prompt("Enter Celsius : ")); 

var Fahrenheit = (Celsius* (9/5)) + 32 ;

document.write("Fahrenheit : "+ Fahrenheit);


//Conversion Fahrenheit to Celsius

var Fahrenheit =(prompt("Enter Fahrenheit : ")); 

var Celsius = (Fahrenheit - 32) * (5/9);

document.write("Celsius = " + Celsius);


// Area Calculation
var base =parseFloat(prompt("Enter Base : ")); 
var height = parseFloat(prompt("Enter Height : "));

var square = base * height ;
document.write('Square Area is : ' + square );
*/