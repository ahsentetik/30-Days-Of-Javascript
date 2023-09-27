//1-
let firstTitle =document.querySelector('p');
console.log(firstTitle);
//2-
let title1 = document.querySelector('#title_');
let title2= document.querySelector('#title_2');
let allTitle3=document.querySelector('#title_3');

//3-
let allTitle = document.querySelectorAll('p');
console.log(allTitle);

//4-

let allTitle1 = document.querySelectorAll('p');
allTitle1.forEach(element => {console.log(element.textContent);
    
});
//5-

const allTitle2 = document.querySelectorAll('p');
allTitle2[3].textContent = "Fourty Paragraph";

//6-
const paragraphs = document.querySelectorAll('p');


paragraphs[0].setAttribute('id', 'paragraph-1');
paragraphs[1].setAttribute('id', 'paragraph-2');
paragraphs[2].setAttribute('id', 'paragraph-3');
paragraphs[3].setAttribute('id', 'paragraph-4');

paragraphs[0].setAttribute('class', 'paragraph-class');
paragraphs[1].setAttribute('class', 'paragraph-class');
paragraphs[2].setAttribute('class', 'paragraph-class');
paragraphs[3].setAttribute('class', 'paragraph-class');

const ids = ['paragraph-1', 'paragraph-2', 'paragraph-3', 'paragraph-4'];
const className = 'paragraph-class';



for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].id = ids[i];
    paragraphs[i].classList.add(className);
}