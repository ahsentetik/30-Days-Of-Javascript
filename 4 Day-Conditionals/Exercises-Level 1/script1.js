//1-Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age=parseInt(prompt("Enter your age:"));
if(age>=18){
    alert("You are old enough to drive!");
}else{
    alert("You are left with 3 years to drive!")
}
//2-Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge=parseInt(prompt("Enter your own age: "));
let yourAge=parseInt(prompt("Enter his age:"));

if(myAge<yourAge){
alert(`You are ${yourAge-myAge} years older than me.`);
}else{
    alert(`I am ${myAge-yourAge} years older than you`);
}
//3-If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways


//ternary operator.

let a = parseInt(prompt("Enter is a:"));
let b=parseInt(prompt("Enter is b:"));

a>b ? console.log(a,"is greater than", b) 
: console.log(a,"is lesser than",b);

//using if else
if(a>b){
    console.log(a,"is greater than", b) 
}else{
    console.log(a,"is lesser than",b)
}

//4-Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num =parseInt(prompt("Enter a number:"));
num%2==0 ? console.log(`${num} is a an even number`)
: console.log(`${num} is an odd number`);