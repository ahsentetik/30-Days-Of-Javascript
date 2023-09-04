let countries = ['Pakistan', 'India', 'Afghanistan', 'Iran', 'Turkey'];

// 1
let empty = new Set();

// 2
let arr = [0,1,2,3,4,5,6,7,8,9,10];
let anotherSet = new Set();
for(const n of arr) {
   anotherSet.add(n);
}

// 3    
anotherSet.delete(2);

// 4: clear the set      
anotherSet.clear();

// 5: set of 5 string elements 
let setOfCountries = new Set(countries);
setOfCountries.forEach(string => console.log(string))

// 6
let mapOfCountries = new Map();
for(const country of countries) {
   mapOfCountries.set(country, country.length);
}

