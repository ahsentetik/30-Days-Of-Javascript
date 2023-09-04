//1-Declare an empty array;
const array = [];
//2-Declare an array with more than 5 number of elements
const array1=[1,2,3,4,5,6,7];
//3-Find the length of your array
let length1=array1.length;
console.log(length1);
//4-Get the first item, the middle item and the last item of the array
let firstArray = array1[0];
let middleArray=array1[parseInt(length1/2)];
let lastArray=array1[length1-1];

console.log(firstArray);
console.log(middleArray);
console.log(lastArray);
//5-Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes =['Ahsen',356,true,null];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);
//6-Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];

//7-Print the array using console.log()
console.log(itCompanies);
//8-Print the number of companies in the array
console.log(itCompanies.length);
//9-Print the first company, middle and last company
let firstCompany=itCompanies[0];
let middleCompany=itCompanies[parseInt(itCompanies.length/2)];
let lastCompany=itCompanies[itCompanies.length-1];

console.log(firstCompany);
console.log((middleCompany));
console.log(lastCompany);

//10-Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//11-Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//12-Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence =itCompanies.join(','+'are big IT companies.');
console.log(sentence)
//13-Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes("Facebook")){
    console.log("Facebook is exists in the itCompany");

}else{
    console.log("Facebook not exist in the itCompany");
}
//14-Filter out companies which have more than one 'o' without the filter method
const itCompanies0 =[ 'Apple', 'IBM', 'Oracle' ];
console.log(itCompanies0);
//15-Sort the array using sort() method
const itCompanies1 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
console.log(itCompanies.sort())
//16-Reverse the array using reverse() method
const itCompanies2 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
console.log(itCompanies.reverse());
//17-Slice out the first 3 companies from the array
const itCompanies3 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
console.log(itCompanies3.slice(0,3));
//18-Slice out the last 3 companies from the array
const itCompanies4 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
let company =itCompanies4.length
console.log(itCompanies4.slice(4,company));//company değişkeninin değeri dizinin uzunluğu olarak alındı böylece kesilen değer 0 oldu ve bizde dizinin sonundaki değeri alabildik
//19-Slice out the middle IT company or companies from the array
const itCompanies5 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
console.log(itCompanies5.slice(3,4));
//20-Remove the first IT company from the array
const itCompanies6 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
console.log(itCompanies6.shift());
//21-Remove the middle IT company or companies from the array
const itCompanies7=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
itCompanies7.splice(3,1);
console.log(itCompanies7);
//22-Remove the last IT company from the array
const itCompanies8=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
itCompanies8.pop();
console.log(itCompanies8);
//23-Remove all IT companie
const itCompanies9=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
itCompanies9.splice();
console.log(itCompanies9); 