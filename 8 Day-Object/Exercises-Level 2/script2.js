//1-
const users = {
    Alex : {
    name:'Alex',
    email:'alex@alex.com',
    skills:['HTML','CSS','JavaScript'],
    age:20,
    isLoggedIn:false,
    points:30
    },
    Asab:{
    name:'Asab',
    email:'asab@asab.com',
    skills:['HTML','CSS','JavaScript','Redux','MongoDB','Express','React','Node'],
    age:25,
    isLoggedIn:false,
    points:50
    },
    Brook:{
    name:'Brook',
    email:'daniel@daniel.com',
    skills:['HTML','CSS','JavaScript','React','Redux'],
    age:30,
    isLoggedIn:true,
    points:50
    },
    Daniel:{
    name:'Daniel',
    email:'daniel@alex.com',
    skills:['HTML','CSS','JavaScript','Python'],
    age:20,
    isLoggedIn:false,
    points:40
    },
    John:{
    name:'John',
    email:'john@john.com',
    skills:['HTML','CSS','JavaScript','React','Redux','Node.js'],
    age:20,
    isLoggedIn:true,
    points:50
    },
    Thomas:{
    name:'Thomas',
    email:'thomas@thomas.com',
    skills:['HTML','CSS','JavaScript','React'],
    age:20,
    isLoggedIn:false,
    points:40
    },
    Paul:{
    name:'Paul',
    email:'paul@paul.com',
    skills:['HTML','CSS','JavaScript','MongoDB','Express','React','Node'],
    age:20,
    isLoggedIn:false,
    points:40
    }
 }
 
 // 1 
 let max = 0;
 let skilledPerson;
 
 for(const user of Object.keys(users)) {
    if(users[user].skills.length > max) {
       max = users[user].skills.length;
       skilledPerson = Object.assign({}, users[user]);
    }
 }
 console.log( skilledPerson.name);
 //2-
 let logInUser=0;
 let point50User=0;
 
 for(const user of Object.keys(users)){
    if(users[user].logInUser){
        logInUser++;
    
    }
    if(users[user].points>=50){
        point50User++;
    }

}
console.log("Login user:"+logInUser+ " Point 50:"+point50User);

//3-
function findMernStackDevs(){
    let mern = ['MongoDB', 'Express', 'React', 'Node'];
    let mernStackDevs = [];

  for (const dev of Object.values(users)) {
    let skill = mern.every(skill => dev.skills.includes(skill));
    if (skill) {
      mernStackDevs.push(dev);
    }
  }

  return mernStackDevs;
}

 
console.log(findMernStackDevs());
//4-
const usersCopy = Object.assign({}, users);
usersCopy['Ahsen'] = {};
console.log(usersCopy);
//5-
const keys = Object.keys(users);
console.log(keys);
//6-
const values = Object.values(users);
console.log(values);
//7-
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
]

for (const countryKey of countries) {
    const country = countries[countryKey];
    
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Languages: ${country.languages.join(', ')}`);
   
  }