//1-Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//2-First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words=text.split(" ");
console.log(words);
//3-In the following shopping cart add, remove, edit items
//const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart1 = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart1.unshift('Meat');
console.log(shoppingCart1);
//add Sugar at the end of you shopping cart if it has not been already added
const shoppingCart2 = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart2.push('Sugar');
console.log(shoppingCart2);
//remove 'Honey' if you are allergic to honey
const shoppingCart4 = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart4.splice(shoppingCart4.lastIndexOf('Honey'),1);
console.log(shoppingCart4);
//modify Tea to 'Green Tea'
const shoppingCart5 = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart5[shoppingCart5.indexOf('Tea')]="Green Tea"; //tea adında belirtilen değerin indexini değiştirdik
console.log(shoppingCart5);
//4-In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'] 
  if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA");
 } else{ countries.push("Ethiopia");  
   console.log(countries);
}
//5-In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
 } else webTechs.push('Sass');
 console.log(webTechs);
 //6-Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB']
const fullStack =frontEnd.concat(backEnd);
console.log(fullStack)


  