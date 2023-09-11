//1-
const paragraphs = document.querySelectorAll('h1');
paragraphs.forEach(element => {
    element.style.color ='red';
    element.style.backgroundColor = 'green';
    element.style.fontSize = '25px';
    element.style.fontFamily = 'cursive';
    
});
//2
/*const paragraphs = document.querySelectorAll('h1');

paragraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) {
        // İlk ve üçüncü paragraflar (0 ve 2. indeks) yeşil renkte
        paragraph.style.color = 'green';
    } else {
        // İkinci ve dördüncü paragraflar (1 ve 3. indeks) kırmızı renkte
        paragraph.style.color = 'red';
    }
});*/

//3
let a = 1;
for (let element of paragraphs) {
  if (a == 1) {
    element.textContent = `${a}st Pargraph!`;
  } else if (a === 2) {
    element.textContent = `${a}nd Paragraph`;
  } else if (a == 3) {
    element.textContent = `${a}rd Pargraphs`;
  } else
    element.textContent = `${a}th Paragraph!`;

  element.setAttribute('id', `${a}-paragraph`);
  element.setAttribute('class', 'Paragraph');
  a++;
}