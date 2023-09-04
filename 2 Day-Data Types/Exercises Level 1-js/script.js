//1-Declare a variable name challenge and assign it to an inintal value '30 Days od Javascript'
let challenge = "30 Days Of Javascript";
//2-Print the string on the browser console using console.log()
console.log(challenge);
//3-Print the length of the string on the browser console using console.log()
console.log(challenge.length);
//4-Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
//5-Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());
//6-Cut (slice) out the first word of the string using substr() or substring() method
let firstWord = challenge.substr(0,8); //30 Days
console.log(firstWord);
//7-Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let lastWord = challenge.substring(7,challenge,length);
console.log(lastWord);//30 Days
//8-Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));
//9-Split the string into an array using split() method
let array =challenge.split(" ");
console.log(array);
//10-Split the string 30 Days Of JavaScript at the space using split() method
console.log(array);
//11-'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let arrays ="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let array1 =arrays.split(",");
console.log(array1);
//12-Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('Javascript','Python'));
//13-What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let charAt_15 = challenge.charAt(15);
console.log(charAt_15);
//14-What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let charCodeAt_J =challenge.charCodeAt(11);
console.log(charCodeAt_J);
//15-Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let firstOcurrenceOf_a = challenge.indexOf("a",1);
console.log(firstOcurrenceOf_a);
//16-Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let lastOcurrenceOf_a=challenge.lastIndexOf('a');
console.log(lastOcurrenceOf_a);
//17-Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence="You cannot end a sentence with because because because is a conjunction";
let firstOccur_because=sentence.indexOf("because",1);
console.log(firstOccur_because);
//18-Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let lastOccur_because=sentence.lastIndexOf("because");
console.log(lastOccur_because);
//19-Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let firstOccurBecause=sentence.search("because",1);
console.log(firstOccurBecause);
//20-Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trimmed ="30 Days Of Javascript".trim();
console.log(trimmed);
//21-Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let startsWiths =challenge.startsWith("30");
console.log(startsWiths);
//22-Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let endWiths =challenge.endsWith("t");
console.log(endWiths);
//23-Use match() method to find all the a’s in 30 Days Of JavaScript
let matches =challenge.match(/a/g);
console.log(matches);
//24-Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstWords = "30 Days" ;
let secondWord ="Javascript";
let merge =firstWords.concat(secondWord);
console.log(merge);
//25-Use repeat() method to print 30 Days Of JavaScript 2 times
console.log("30 Days Of Javascript".repeat(2));