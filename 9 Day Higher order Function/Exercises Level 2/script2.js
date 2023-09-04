//1
const totalPrice = products.map(product => product.price).filter(price => price > 0).reduce((acc, curr) => acc + curr, 0);
console.log(totalPrice);
//2
let totalPrice2 = products.reduce((sum, obj) => { return typeof obj.price != 'string' ? sum += obj.price: sum;
}, 0);
// 3  

const countries = require('../countries_data.js');

function categorizeCountries() {
  const patterns = ['land', 'ia', 'island', 'stan'];
  const categorizedCountries = {};

  patterns.forEach((pattern) => {
    const countriesWithPattern = countries.filter((country) =>
      country.name.toLowerCase().includes(pattern.toLowerCase())
    );
    categorizedCountries[pattern] = countriesWithPattern;
  });

  return categorizedCountries;
}

const categorizedCountries = categorizeCountries();
console.log(categorizedCountries);

 // 4 
 let frequentLetterList = Countries.map(c => c[0]).reduce((obj, cur) => {
    obj[cur] = (obj[cur] || 0) +1;
    return obj;
 }, {})
 console.log(frequentLetterList);
 /**
 function getObject(arr) {
    let object = {};
    for(const i of arr) {
       if(object.hasOwnProperty(i)) {
          object[i] += 1;
       } 
       else {
          object[i] = 1;
       }
    }
    return object;
 }
 console.log(getObject(frequentLetter));
 **/
 // 5: get first 10 countries      
 let getFirstTenCountries = arr => arr.filter(c => arr.indexOf(c)<10);
 
 // 6: get last 10 countries
 let getLastTenCountries = arr => arr.filter(c=> arr.indexOf(c) > arr.length-11);
 
 // 7 : find out whic letter is used the most
 let frequentFirstLetter = Object.entries(Countries.map(c => c[0]).reduce((acc,cur) => {
    acc[cur] = (acc[cur] || 0) +1;
    return acc;
 }, {})).reduce((obj, cur) => {
    obj.max = (obj.max || cur[1]);
    obj.letter = (obj.letter || '');
 
    if (obj.max < cur[1]) {
       obj.max = cur[1];
       obj.letter = cur[0];
    }
    return obj;
 }, {}).letter;
 
 console.log(frequentFirstLetter);