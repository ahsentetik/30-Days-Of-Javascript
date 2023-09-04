//1-Using console.log() print out the following statement:
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
//2-Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
//3-Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let typeOf10 = typeof "10";
typeOf10 =typeof parseInt("10");
console.log(typeof  '10'==10);
//4-Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num ="9.8";
let numFloat = parseFloat(num);
console.log(numFloat);
//5-Check if 'on' is found in both python and jargon
let onPython ="Pyhton".includes("on");
let onJargon ="Jargon".includes("on");
console.log("on is found in both  pyhton and Jargon" , onPython==onJargon);
//6-I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon" .includes("Jargon"));
//7-Generate a random number between 0 and 100 inclusively.
let randomNumber=Math.floor(Math.random()*100);
console.log(randomNumber);
//8-Generate a random number between 50 and 100 inclusively.
let randomNumber1=Math.floor(Math.random()*51)+50;
console.log(randomNumber1);
//9-Generate a random number between 0 and 255 inclusively.
let randomNumber2=Math.floor(Math.random()*225);
console.log(randomNumber2);
//10-Access the 'JavaScript' string characters using a random number.
let string ="Javascript";
let randomString =Math.floor(Math.random()*(string.length-1));
console.log(string[randomString]);
//11-Use console.log() and escape characters to print the following pattern.
//12-Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence="You cannot end a sentence with because because because is a conjunction";
let because=sentence.substr(sentence.indexOf("because",1),("because".length*3)+2);
console.log(because);
