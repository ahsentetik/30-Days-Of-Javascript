//1-

/*
function userIdGeneratedByUser(){
    
    let characters="abcdefghijklmnopqrstuvwxyz0123456789"
    let charNum =prompt("Enter number of characters:");
    let secondInput=prompt("Enter number og length:");
    let id=[]; 
    for(let i=0;i<charNum;i++){
         id[i]="";
        for(let j=0;j<secondInput;j++){
            let random = characters[Math.floor(Math.random()*characters.length)];
            id +=characters[random];
        }
    }
}
console.log(userIdGeneratedByUser());

//2-

function rgbColorGenerator(){
let n=3;
let arr =[]

for(let i=0; i<n;i++){
    var red=(Math.floor(Math.random()*255));//var olarak kullanmalıyız
    var green=(Math.floor(Math.random()*255));
    var blue=(Math.floor(Math.random()*255));

     arr.push(red,green,blue);
}
console.log(`rgb(${red} ,${green} ,${blue})`);}

rgbColorGenerator();
//3
function arrayOfHexaColors(){
    let chars ="0123456789abcdef"
    let hex=[];

    for(let i=0;i<1;i++){
        hex[i]="#";
        for(let j=0;j<6;j++){
            hex[i] +=chars[Math.floor(Math.random()*chars.length)];
        }
    }
 return hex;

}
console.log(arrayOfHexaColors());
//4-
const arrayOfRgbColors=()=>{
    let n=3;
    let arr=[];

    for(let i=0; i<n;i++){
        var red=(Math.floor(Math.random()*255));//var olarak kullanmalıyız
        var green=(Math.floor(Math.random()*255));
        var blue=(Math.floor(Math.random()*255));
    
         arr.push(red,green,blue);
    }
    console.log(`rgb(${red} ,${green} ,${blue})`);}
    arrayOfHexaColors();
    //5-Hexa rengini rgb'ye dönüştüren ve bir rgb rengi döndüren convertHexaToRgb işlevini yazın
    function convertHexaToRgb(hex) {
      var r = parseInt(hex.slice(1, 3), 16),
      var  g = parseInt(hex.slice(3, 5), 16),
      var b = parseInt(hex.slice(5, 7), 16);
  
      return `rgb(${r}, ${g}, ${b})`;
  }
  

  var rgbColor = convertHexaToRgb("#FFA500");
  console.log(rgbColor); 

  //7-Herhangi bir sayıda hexa veya rgb rengi üretebilen bir createColors işlevi yazın.
    function createColors(hex) {
    
      hex = hex.replace("#", "");
  
      var r = parseInt(hex.substring(0, 2), 16);
      var g = parseInt(hex.substring(2, 4), 16);
      var b = parseInt(hex.substring(4, 6), 16);
  
      return "rgb(" + r + ", " + g + ", " + b + ")";
  }
    //9-
    function factorial(num){
        if(num<=1){
            return 1;
        }else{
            return num*factorial(num-1);
        }
        
    }console.log(factorial(2));
    //10-
    isEmpty =(value)=>{
        if(value==undefined){
            return console.log("it is empty");

        }else{
            return console.log("İt not empty");
        }
    }
    isEmpty(58);
    //11-
    function sum(){
        let sum =0;
        for(let i=0; i<arguments.length;i++){
            sum+=arguments[i]
        }
        return sum;
    }
    console.log(sum(1,4,7));
    //12
    let sumOfArrayItems = (arr) => {
        let sum = 0;     
        for(const i of arr) 
          sum += i      
        return sum;
      }
    //13-
    function average(arr) {
        let arrSum = 0;
        let count = 0;
      
        for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] !== 'number') {
            return "is not number";
          }else{
          arrSum += arr[i];
          count++;
          }
        }
      
        return arrSum / count;
      }
      console.log(average([1,2,3,4]));
      //14-
        function modifyArray (arr) {
            if(arr.length < 5){
                return 'Not found';
            }
                arr[4] = arr[4].toUpperCase()
                return arr
            
        }
        console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
        console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
    
        //15-
        let isPrime = num => {
            if(num <= 0 || num == 1) return false; 
            if(num == 2 || num == 3) return true;    
            
            for(let i=1; i<=Math.sqrt(num); i++) {
              if(num % i == 0) return false;      
            }
            return true;     
         }
         console.log(isPrime([21]));
         //16   
function areAllUnique(arr) {
    for(let x = 1; x < arr.length; x++) {
      for(let i = 0; i< x; i++) {
        if(arr[x] == arr[i])
          return false;
      }
    } return true;
  }
  console.log(areAllUnique([8]));
  
  //17    
  let areSameType = arr => {
    let arr1=[1,2,3,4]
    let type = typeof arr1[0];
    for(const i of arr1) {
      if(type != i)
        return false;      
    }
    return true;
  }
  console.log(areSameType());
  
  //19  
  let sevenRandomNumbers = () => {
    let arr = [];
    for(let i = 0; i<7; i++) {
      let random = Math.floor(Math.random() * 9);
      
      let isUnique = true;
      for(const x of arr) {
        if(random == x) {
          isUnique = false;
          break;
        }
      }
      if(isUnique) {
        arr.push(random);
      }
    }
    return arr; 
  }
  console.log(sevenRandomNumbers());
  
  //20 
  
  function reverseCountries (arr) {
    arr = ["Türkiye","ABD","Italy","Germany"];

    let copy = arr.slice(0, arr.length);
    
    let num = 0;
    for(let i=arr.length-1; i>=0; i--) { 
      arr[num] = copy[i];
      num++;
    }
    return arr;
  } 
  console.log(reverseCountries());


  function reverseCountries1(){
    let country = ["Türkiye","ABD","Italy","Germany"];

    console.log(country.reverse());

  }
  reverseCountries1();
  */