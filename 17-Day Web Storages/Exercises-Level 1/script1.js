let student={
    firstName : "Ahsen",
    lastName : "Tetik",
    age:22,
    country:"Türkiye",
    city:"İstanbul"
}
let text = JSON.stringify(student);
localStorage.setItem(student,text);
console.log(localStorage);

