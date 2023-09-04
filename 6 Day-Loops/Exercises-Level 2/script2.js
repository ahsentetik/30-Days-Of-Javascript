//1-Develop a small script which generate any number of characters random id:

/*var num ="abcdefghijklmnoprstuvwxyz0123456789"
let id =[];
let n =6;
for(let i=0;i<n; i++){
    let random =Math.floor(Math.random()*num.length);
    id+=num[random];
}

for(let j=0;j<n;j++){
    var randomId =id;
    console.log(randomId);
}
//2-Write a script which generates a random hexadecimal number.
var num ="abcdefghijklmnoprstuvwxyz0123456789"
let id =[];
let n=6;
for(let i=0;i<=n;i++){
    let random =Math.floor(Math.random()*num.length);
    id+=num[random];
}
for(let j=0;j<n;j++){
    var randomId=id;
    console.log(`#${randomId}`);
}

//3-Write a script which generates a random rgb color number.

let n=3;
let arr =[]

for(let i=0; i<n;i++){
    var red=(Math.floor(Math.random()*255));//var olarak kullanmalıyız
    var green=(Math.floor(Math.random()*255));
    var blue=(Math.floor(Math.random()*255));

     arr.push(red,green,blue);
}
console.log(`rgb(${red} ,${green} ,${blue})`);

//4-Using the above countries array, create the following new array.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  let upCountry =[];
  for(const country of countries){
    upCountry.push(country.toUpperCase());

  }
  console.log(upCountry);
  
 //5-Using the above countries array, create an array for countries length'.
 const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
 let lenCountry =[];

 for(const country of countries){
  lenCountry.push(country.length);
 }
 console.log(lenCountry);
 */
//6-Use the countries array to create the following array of arrays
/*
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let lenCountry=[];
  for(const country of countries){
  let first_3 = country.slice(0,3).toUpperCase();
lenCountry.push([country,first_3,country.length]);
}
console.log(lenCountry);

//7-In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const landCountries =[];

  for(country of countries){
    if(country.includes('land')){
        landCountries.push(country)
 
    }
    console.log(landCountries);
  }
  
 //8-In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
 const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const iaCountries =[];

  for(country of countries){
    if(country.includes('ia')){
        iaCountries.push(country)
 
    }
    console.log(iaCountries);
  }
  //9-Using the above countries array, find the country containing the biggest number of characters.
 const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

let maxCountry = '';
let maxCountryLength = 0;

for (const country of countries) {
  const length = country.length;
  if (length > maxCountryLength) {
    maxCountryLength = length;
    maxCountry = country;
  }
}

console.log(maxCountry);

//10-Using the above countries array, find the country containing only 5 characters.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

let len_5Countries = [];
for (const country of countries) {
   if (country.length === 5)
      len_5Countries.push(country);
}
console.log(len_5Countries);
//11-Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let longestWord = '';
  let currentWord;

for (const word of webTechs) {
  currentWord = word;

  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }
}

console.log(longestWord);*/
//12-Use the webTechs array to create the following array of arrays:
/*const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let techWithLen = [];
for (const word of webTechs) {
   let len = word.length;
   let caps = word.toUpperCase();
   
   techWithLen.push([caps, len])
};
console.log(techWithLen);
//13-An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let mernArray = ['MongoDB', 'Express', 'React', 'Node'];
let mernStack = [];

for (const word of mernArray) {
   mernStack.push(word[0]);
}; console.log(mernStack.join(''));

//14-Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for(const word of webTechs) {
    console.log(word);
 }
 
//15-This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruits = [];

for (let i = fruits.length-1; i >= 0; i--) {
   reversedFruits.push(fruits[i]);
} console.log(reversedFruits);


//16-Print all the elements of array as shown below.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  for(const word of webTechs){
    console.log(word);
  }
  */