//1-The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
ages.sort();
console.log(ages);
const min =ages[0];
const max=ages[9];
console.log(`Min: ${min} ,Max:${max}`);
//Find the median age(one middle item or two middle items divided by two)
let median=(ages[parseInt(ages.length/2)-1]+ages[parseInt(ages.length/2)])/2;
console.log(median);
//Find the average age(all items divided by number of items)
let sum = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[0]+ages[9]);
let average = sum / ages.length;
console.log(average);
//Find the range of the ages(max minus min)
let range =max-min;
console.log("Range:" ,range);
//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
//Find the middle country(ies) in the countries array
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  //let firstCountry_10 =countries.slice(0,10);
  //console.log(firstCountry_10);
  //2-Find the middle country(ies) in the countries array
  let middleCountry = countries[Math.floor(countries.length/2)];
  console.log(`The middle country is ${middleCountry}`);
  //3-Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
  const middleIndex = Math.floor(countries.length / 2);

  let firstHalf, secondHalf;
  
  if (countries.length /  2 === 0) {
      
      firstHalf = countries.slice(0, middleIndex);
      secondHalf = countries.slice(middleIndex);
  } else {
      
      firstHalf = countries.slice(0, middleIndex + 1);
      secondHalf = countries.slice(middleIndex + 1);
  }
  
  console.log('First half:', firstHalf);
  console.log('Second half:', secondHalf);

