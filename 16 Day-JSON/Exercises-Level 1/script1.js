//1-
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let jsonSkills =JSON.stringify(skills)
console.log(jsonSkills);
//2
let age = 250;
let ageJson = JSON.stringify(age);
console.log(ageJson);
//3-
let isMarried = true;
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

//4-
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

const studentJson = JSON.stringify(student);
console.log(studentJson);