//1-
function fullName(){
    let firstName ='Ahsen';
    let lastName='Tetik';

    let full_Name = firstName + ' ' +lastName ;
    console.log(full_Name);
};
fullName();
//2-
function fullName_2(firstName,lastName){
    
    return `${firstName} ${lastName}`;

}
console.log(fullName_2('Ahsen','Tetik'));
//3-
function addNumbers(oneNum ,twoNum){
    let sum = oneNum + twoNum;
    return sum;
}
console.log(addNumbers(8,7));

//4-
function perimeterOfRectangle_1(length,width){
    let perimeter=length*width;
    return perimeter;
}
console.log(perimeterOfRectangle_1(10,6));

//5-
function perimeterOfRectangle(length,width){
    let perimeter=2*(length+width);
    return perimeter;
}
console.log(perimeterOfRectangle(10,20));
//6-
function volumeOfRectPrism(length,width,height){
    return length*width*height;

}
console.log(volumeOfRectPrism(5,6,4));
//7-
function areaOfCircle(r){
    return Math.PI *r*r;
}
console.log(areaOfCircle(20));
//8-
function circumference(r){
    return Math.PI *2*r;
}
console.log(circumference(8));
//9-
function density(mass,volume){
    let d = mass / volume;
    return d;
}
console.log(density(30,5));
//10-
function calcSpeed(d, t) {
    return d/t;
 } 
 console.log(100,10)

//11-
function calcWeight(mass){
    return Math.PI**2*mass;
}
console.log(calcWeight(8));
//12-
function convertCelsiusToFahrenheit(c){
    return(c*(9/5))+32;
}
console.log(convertCelsiusToFahrenheit(25));
//13-

function BMIcalculate(weight,height){
    return weight/(height*height);
}
BMIcalculate(60,1.70)
 if(BMIcalculate<=18.5){
console.log('Underweight');
 }else if( BMIcalculate<=24.9){
    console.log('Normal Weight');
 }else if(BMIcalculate<=29.9){
    console.log('Overweight');
 }else{
 console.log("Obese!");
 };
 //14-
 function checkSeason(month) {
    let season;
    
    switch (month.toLowerCase()) {
       case "september":
       case "october":
       case "november":
          season = "Autumn";
          break;
    
    case "june":
    case "july":
    case "august":
         season = "Summer";
         break;

       case "december":
       case "january":
       case "february":
          season = "Winter";
          break;
    
       case "march":
       case "april":
       case "may":
          season = "Spring";
    
      
    }
    return season;
 } console.log(checkSeason("DecEMBer"));
 //15-
 function findMax(numOne, numTwo, numThree) {
    if (numOne > numTwo && numOne > numThree) {
        return `${numOne}`;
    }
    else if (numTwo > numOne && numTwo > numThree) {
        return `${numTwo}`
    }
    else (numThree > numOne && numThree > numTwo)
    return `${numThree}`

}
console.log(findMax(9,6,3));