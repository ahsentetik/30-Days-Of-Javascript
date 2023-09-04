//3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countries.forEach (country => console.log(country));

//4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(name => console.log(name));
//5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(num => console.log(num) );
//6
const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countryUpperCase = countries1.map((countries1)=>countries1.toUpperCase());
console.log(countryUpperCase);
//7
const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countryLength = countries2.map((countries2)=> countries2.length);
console.log(countryLength);
//8
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numberSquare = numbers1.map((numSqrt) => numSqrt * numSqrt );
console.log(numberSquare);
//9
const upperName = names.map((upName) => upName.toUpperCase());
console.log(upperName);
//10
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

const priceProduct = products.map(product => {
    if (typeof product.price === "number") {
        return product.price;
    } else {
        return 'price:0';
    }
});

console.log(priceProduct);
//11
const filteredCountry = countries.filter(country => {
    return country.includes('land');
})
console.log(filteredCountry);
//12
/*const sixCharacter = countries.filter(country => {
    if (country.length === 6) {
        return countries;
    }
})*/

//13
const sixCharacter = countries.filter(country => {
    if (country.length >= 6) {
        return countries;
    }
})
console.log(sixCharacter);
//14
const countryfirstE = countries.filter(country => country.startsWith('E'));
console.log(countryfirstE);
//15
const productPrices = products.filter(product => product.price>0);
console.log(productPrices);
//16
let getStringLists = (value) => {
    return value.filter( item=> typeof item === 'string');  }

    let value =['Ahsen',34343];
    console.log(getStringLists(value));
//17
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)
//18
const countries3= ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const concatenatedSentence = countries.reduce((sentence, country, index) => {
    if (index === countries.length - 1) {
      return sentence + 'and ' + country;
    } else {
      return sentence + country + ', ';
    }
  }, 'Estonia, ') + ' are north European countries';
console.log(concatenatedSentence);
//20
const someControl = names.some(len => len.length > 7);
console.log(someControl);
//21
const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log(allCountriesContainLand);
//23
const firstSixLettersCountry = countries.find(country => country.length === 6);
console.log(firstSixLettersCountry);
//24
const indexSixLettersCountry = countries.findIndex(country => country.length == 6);
console.log(indexSixLettersCountry);
//25
const findNorway = countries.findIndex(country => country === "Norway");
console.log(findNorway);
//26
const findRussia = countries.findIndex(counrty => counrty === "Russia");
console.log(findRussia);  
