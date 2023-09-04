//1-Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

/*let b = prompt("Enter base:");
let h = prompt("Enter height:");
console.log("The area of the triangle is " + ( h*b*0.5));*/

//2-Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

/*let x= parseInt(prompt("Enter side x:"));
let y = parseInt(prompt("Enter side y:"));
let z=parseInt(prompt("Enter side z:"));
let sum = x+y+z;
console.log("The perimeter of the triangle is", sum );*/

//3-Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

/*let length = parseFloat(prompt("Enter length:"));
let width =parseFloat(prompt("Enter width:"));
console.log("Perimeter:" ,2*(length+width));*/

//4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

/*let radius = parseFloat(prompt("Radius:"));
let PI = 3.14;
let areaOfCircle = PI *(radius *2);
console.log(areaOfCircle);*/

//5-Calculate the slope, x-intercept and y-intercept of y = 2x -2

/*let x_intercept = 1;
let y_intercept =-2;
let slope = -1*(y_intercept/x_intercept);
console.log("Slope:",slope);

//6-Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let slope1=(10-2)/(6-2);

//7-Compare the slope of above two questions.

slope1 > slope ? alert("Slope2 is bigger") : alert("slope1 is bigger");*/

//8-Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//9-Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

/*let hour = parseFloat(prompt("Enter hours:"));

let ratePerHour =parseFloat(prompt("Enter rate per hour:"));
let pay = hour*ratePerHour;
console.log("Your weekly earning is:",pay);*/

//10-If the length of your name is greater than 7 say, your name is long else say your name is short.

/*let myName ="Ahsen";

console.log("My name is shorter than seven ",myName.length<7);*/

//11-Compare your first name length and your family name length and you should get this output.

/*let myName = "Ahsen";

let lastName="Tetik";
console.log("My last name is equals my name",lastName.length==myName.length);*/

//12-Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

/*let myAge = 30;
let yourAge = 8;
console.log(`I am ${myAge-yourAge} years older than you`);*/

//13-Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

/*let myBirthYear= parseFloat(prompt("Enter birth year:"));
2023-myBirthYear >18 ? console.log(`You are ${2023-myBirthYear}You are old enough to drive`): console.log(`you are ${2023-MybirthYear} You will be allowed to drive after ${18-myBirthYear} years.`);*/

//14-Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

/*let yearLived = parseInt(prompt("Enter number of years you live: "));

console.log(`You lived ${yearLived * 31536000} seconds!`);*/

//15-Create a human readable time format using the Date time object
//i-YYYY-MM-DD HH:mm
const now =new Date();
let mins = now.getMinutes();
let date = now.getDate();
let year = now.getFullYear();
let hours =now.getHours();
let month=now.getMonth();

console.log(`${year}.${month+1}.${date} ${hours}:${mins}`);
//ii-DD-MM-YYYY HH:mm
console.log(`${date}.${month+1}.${year} ${hours}:${mins}`);

//iii-DD/MM/YYYY HH:mm
console.log(`${date}.${month+1}.${year} ${hours}:${mins}`);