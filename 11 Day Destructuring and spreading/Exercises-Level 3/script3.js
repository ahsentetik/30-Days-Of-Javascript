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
   

]
for(const {name, capital, languages, population} of countries) {
    console.log('Name', name);
    console.log('Capital', capital);
    console.log('languages', languages);
    console.log('population', population);
 }
 //2
 const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [name, skills, [,, jsScore, reactScore]] = student;    
console.log(name, skills, jsScore, reactScore)
//3
const students = [ 
    [ 'David', ['HTM' ,'CSS','JS','React'] ,   [ 98 ,   85 ,   90 ,   95 ] ] , 
    [ 'John' , ['HTM', 'CSS','JS', 'React' ] , [ 85 ,   80 ,   85 ,   80 ] ] 
  ];
  
  const convertArrayToObject = (arr) => {
     let arrOfObjects = [];
     for(const [name, skills, scores] of arr) 
         arrOfObjects.push({name, skills, scores});
     return arrOfObjects;
  } 
  convertArrayToObject(students);
  //4
  const s = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

let skills1 = {
 bts: {skill: 'Bootstrap', level: 8}, 
 exp: {skill: 'Express', level: 9}, 
 sql: {skill: 'SQL', level: 8}, 
 ds : 'SQL'
} 

let copiedStudent = {...s ,...skills1};
console.log(copiedStudent)