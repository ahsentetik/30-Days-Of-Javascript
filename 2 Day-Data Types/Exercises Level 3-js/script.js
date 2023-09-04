//1-Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence ="Love is the best thing in this world. Some found their love and some are still looking for their love";
let pattern =/love/gi;
console.log(sentence.match(pattern));
//2-Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 ="You cannot end a sentence with because because because is a conjunction";
let pattern2=/because/gi;
console.log(sentence2.match(pattern2));
//3-
//4-Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentence3 ="He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let pattern3=/\d+/g; // d bir sayıyı ifade eder 
let number =sentence3.match(pattern3);
 let num1 =parseInt(number[0]);
 let num2 =parseInt(number[1]);
 let num3 =parseInt(number[2]);

 let totalNum = num1+num2+num3;
 console.log("Total salary:" + totalNum);