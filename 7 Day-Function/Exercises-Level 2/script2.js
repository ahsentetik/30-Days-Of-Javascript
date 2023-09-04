//1-
function solventLinEquation(a,b,c,x,y){ 
 return (a*x)+(b*y)+c;
}
console.log(solventLinEquation(2,3,4,5,6));
//2-
function solveQuadEquation(a,b,c,x){
    return (a*Math.pow(x,2))+(b*x)+c;
}
console.log(solveQuadEquation(1,2,3,4));
//3-
/*let printArray =function(arr){
     for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
}
printArray();*/
//4-
function showDateTime() {

    let time = new Date();
    let date = String(time.getDate()).padStart(2, 0);
    let month = String(time.getMonth()).padStart(2, 0);
    let year= time.getFullYear();
    let hours = time.getHours();
    let minute = time.getMinutes();
    let times = `${date}/${month}/${year} ${hours}:${minute}`
    return times;
}

console.log(showDateTime());

//5-
function swapValues(x, y) {
    return (`x= ${y}, y= ${x}`);
}
console.log(swapValues(6, 5));

//6-
let chars = ['A','B','C','D','E'];
function reverseArray(){
    let newChars=[];
newChars = chars.reverse();
return newChars;
}
console.log(reverseArray());

/*let reverseArray = (arr) {
    let reversed = [];
    for(let i = arr.length-1; i >= 0; i--)
      reversed.push(i);
      
    return reversed;
  }*/

//7-
let names = ["Ahsen", "Ali", "Melek", "Elif"];
function capitalizeArray(word) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(word[i]);
        word[i] = names[i].toUpperCase();
    }

    return word;
}
console.log(capitalizeArray(names));

//8-
function addItem(arr) {
    let result = [arr];
    return result;
}
console.log(addItem("Ahsen", "Ali", "Melek", "Elif"));
//9-
let array = ["A", "B", "C", "D"];
removeItem = (index) => {
    array.splice(index, 1);
    return array
}

console.log(removeItem("Ahsen", "Ali", "Melek", "Elif"));
//10-
function addUpto(num) {
    if(num == 0) return 0;
    else return num + addUpto(num-1);
  }
  console.log(addUpto(20));
  //11-
  function addOddsUpto(num) {
    if(num <= 0) return 0;
    num = num%2== 0 ? num -1: num;
    return num + addOddsUpto(num - 2);
  }
  console.log(addOddsUpto(20));
  //12-
  function addEvensUpto(num) {
    if(num <= 0) return 0;
    num = num%2== 0? num: num-1;
    return num + addOddsUpto(num - 2);
  }
  console.log(addEvensUpto(15));
  //13-
  function evensAndOdds(number) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            even++
        }

        else {
            odd++
        }
    }

    return `The number of odds are ${odd}. The number of evens are ${even}.`;
}
console.log(evensAndOdds(50));
//14-
//15-
function generateUserIP () {
    let a = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    let c = parseInt(Math.random() * 255);
    let d = parseInt(Math.random() * 255);
    
    
    return `${a}.${b}.${c}.${d}`;
  }
  console.log(generateUserIP());
  //16-
  function randomMacAddress() {
    let arr = [];
    let length = "0123456789ABCDEF";
    
        for (let i = 0; i <= 6; i++) {
            let first = Math.floor(Math.random() * 16);
            let last = Math.floor(Math.random() * 16);
            arr.push(length[first] + length[last]);
        }
        return arr.join(":");
    }
    
    console.log(randomMacAddress());
    //17
 function randomHexaNumberGeneration(){
    var num ="abcdefghijklmnoprstuvwxyz0123456789"
let id =[];
let n=6;
for(let i=0;i<=n;i++){
    let random =Math.floor(Math.random()*num.length);
    id+=num[random];
}
for(let j=0;j<n;j++){
    var randomId=id;
    console.log(`#${randomId}`);
}
 }
 randomHexaNumberGeneration();
 //18
 function userldGenerator(){
    var num ="abcdefghijklmnoprstuvwxyz0123456789"
let id =[];
let n =6;
for(let i=0;i<n; i++){
    let random =Math.floor(Math.random()*num.length);
    id+=num[random];
}

for(let j=0;j<n;j++){
    var randomId =id;
    console.log(randomId);
}
 }
 userldGenerator();