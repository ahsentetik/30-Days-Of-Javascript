//1
const constants = [2.72, 3.14, 9.81, 37, 100];

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e);                
console.log(pi);              
console.log(gravity);         
console.log(humanBodyTemp);   
//2
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

const [fin, est, sw, den, nor] = countries;

console.log(fin); 
console.log(est); 
console.log(sw);  
console.log(den); 
console.log(nor); 
//3


const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};

const { width, height, area, perimeter } = rectangle;

console.log(width);      
console.log(height);     
console.log(area);       
console.log(perimeter);