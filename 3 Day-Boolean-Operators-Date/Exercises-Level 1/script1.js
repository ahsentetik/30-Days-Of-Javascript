//1-Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName ="Ahsen";
let lastName ="Tetik";
let country="Türkiye";
let age = 22;
let isMarried=false;
let year =2023

console.log(typeof firstName,typeof lastName,typeof country,typeof age,typeof isMarried,typeof year);
//2-Check if type of '10' is equal to 10
 console.log(typeof  10==10);
 //3-Check if parseInt('9.8') is equal to 10
 console.log(parseInt('9.8')==10);
//4-Boolean value is either true or false.
//i-Write three JavaScript statement which provide truthy value.
  console.log(10<12);
  console.log(undefined==null);
  console.log('mango'.length=='apple'.length);

//ii-Write three JavaScript statement which provide falsy value.
 console.log(10>12);
 console.log(undefined===null);
 console.log('javascript'.length=='java'.length);
 /*5-Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.*/
console.log(true ,true ,false, false, true, true, false, false ,false ,true, false);
console.log(4 > 3,4 >= 3,4 < 3, 4 <= 3, 4 == 4, 4 === 4,4 != 4, 4 !== 4,4 != '4',4 == '4', 4 === '4');
/*6-Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python*/
console.log(true,false,true,true,false,true,true,false,true,true);
console.log(4 > 3 && 10 < 12,4 > 3 && 10 > 12,4 > 3 || 10 < 12,4 > 3 || 10 > 12,!(4 > 3),!(4 < 3),!(false),!(4 > 3 && 10 < 12),!(4 > 3 && 10 > 12),!(4 === '4'));
//7-Use the Date object to do the following activities
//i-What is the year today?
const now = new Date();
console.log("Year:"+now.getFullYear());
//ii-What is the month today as a number?
console.log("Month:" +now.getMonth()+1);
//iii-What is the date today?
console.log("Date:"+now.getDate());
//iv-What is the day today as a number?
console.log("Day:"+now.getDay());
//v-What is the hours now?
console.log("Hours:"+now.getHours());
//vi-What is the minutes now?
console.log("Minutes:"+now.getMinutes());
//vii-Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log("Time:"+now.getTime());