//1
const countries = [
    {
       name: 'Afghanistan',
       capital: 'Kabul',
       languages: ['Pashto', 'Uzbek', 'Turkmen'],
       population: 27657145,
       flag: 'https://restcountries.eu/data/afg.svg',
       currency: 'Afghan afghani'
},
    {
       name: 'Åland Islands',
       capital: 'Mariehamn',
       languages: ['Swedish'],
       population: 28875,
       flag: 'https://restcountries.eu/data/ala.svg',
       currency: 'Euro'
},
    {
       name: 'Albania',
       capital: 'Tirana',
       languages: ['Albanian'],
       population: 2886026,
       flag: 'https://restcountries.eu/data/alb.svg',
       currency: 'Albanian lek'
},
    {
       name: 'Algeria',
       capital: 'Algiers',
       languages: ['Arabic'],
       population: 40400000,
       flag: 'https://restcountries.eu/data/dza.svg',
       currency: 'Algerian dinar'
},
    {
       name: 'American Samoa',
       capital: 'Pago Pago',
       languages: ['English', 'Samoan'],
       population: 57100,
       flag: 'https://restcountries.eu/data/asm.svg',
       currency: 'United State Dollar'
},
    {
       name: 'Andorra',
       capital: 'Andorra la Vella',
       languages: ['Catalan'],
       population: 78014,
       flag: 'https://restcountries.eu/data/and.svg',
       currency: 'Euro'
}]
// 1(a)     
let sortedByName = countries.map(o => o.name );  
sortedByName.forEach(x =>console.log(x));

// 1(b)
let sortedByCapital = countries.sort((a, b) => a.capital.localeCompare(b.capital));
sortedByCapital.forEach(o=>console.log(o));

// 1(c) 
let sortedByPopulation = countries.sort((a, b) => b.population - a.population);
sortedByPopulation.forEach(x => console.log(x));

// 2   
let mostSpoken = Object.entries(countries.reduce((langs, obj) => { obj.languages.forEach(x => langs.push(x));
    return langs;
 }, []).reduce((dict, lang) => {
    dict[lang] = (dict[lang] || 0) +1;
    return dict;
 }, {})).sort((a, b) => b[1]-a[1]);
 mostSpoken.forEach(x => console.log(x));

 //3-
 function sortByMostPopulated (countries) { 
    let mostPopulated = countries.sort((a, b) => b.population - a.population);
    return mostPopulated;
  }
 