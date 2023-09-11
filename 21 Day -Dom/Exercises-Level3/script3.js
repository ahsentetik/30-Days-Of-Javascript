//1-


function yearColor(){

  let year = document.querySelector('year');
  year.style.fontSize ='50px';
  
  let text = document.querySelector('h1');
  text.style.textAlign = 'center';
  text.style.margin = 'auto';
  text.style.padding = '50px'
  
  let text1 = document.querySelector('h2');
  text1.style.textAlign = 'center';
  text1.style.fontSize = '20px';
  text1.style.margin = 'auto';
  text1.style.padding = '10px'

  let color =['blue','green','pink','purple','yellow'];
  let colorIndex=0;
  setInterval(() => {
    year.style.color = color[colorIndex];
    colorIndex = (colorIndex + 1) % color.length;
  }, 1000);
}



function changeBackgroundColorDate(){

let generateColor = () => {
    let alphanums = '0123456789abcdef';
    
    let colorArr = [];
    for(let i=0; i<6; i++) {
      let index = Math.floor(Math.random() * 15);
      colorArr.push(alphanums[index]);
    }
    return '#' + colorArr.join('');
  }
  
let getDate = () => {
    let d = new Date();
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let monthIndex = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();
    
    return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
  }
   
   
  let date = document.querySelector('p');
  date.textContent = getDate(); 
  date.style.margin = 'auto';
  date.style.padding = '6px'
  date.style.textAlign = 'center';
  date.style.fontSize = '20px';
  date.style.fontWeight = '400';
  date.style.width = '40%';
 
  setInterval(() => {
    date.style.backgroundColor = generateColor();
  }, 1000);
  let listItems = document.querySelectorAll('li');
}

      
    
    function challengeBackgroundColors() {
        const challengeItems = document.querySelectorAll('li');
       
        challengeItems.forEach(item => {
          if (item.textContent.includes('Done')) {
            item.style.backgroundColor = 'green'; 
          } else if (item.textContent.includes('Ongoing')) {
            item.style.backgroundColor = 'yellow'; 
          } else if (item.textContent.includes('Coming')) {
            item.style.backgroundColor = 'red'; 
          }
        });
    
      }

yearColor();
changeBackgroundColorDate();
challengeBackgroundColors();