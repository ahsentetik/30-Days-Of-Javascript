//1-
const student = {
    firstName: 'Ahsen',
    lastName: 'Tetik',
    age: 22,
    isMarried: false,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

const studentJson = JSON.stringify(student);
console.log(studentJson);