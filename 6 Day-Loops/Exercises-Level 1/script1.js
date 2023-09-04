/*//1-Iterate 0 to 10 using for loop, do the same using while and do while loop

let i=0;
while(i<=10){
    
    console.log(i);
    i++;   
}

let j = 0;
do{
    console.log(j);
    j++;
}while(j<=10);
//2-Iterate 10 to 0 using for loop, do the same using while and do while loop

let i=10;
while(i>=0){
    
    console.log(i);
    i--;   
}
let j = 10;
do{
    console.log(j);
    j--;
}while(j>=0);

//3-Iterate 0 to n using for loop

let n=8;
for(let i=0;i<=n;i++){
    console.log(i);
}

//4-Write a loop that makes the following pattern using console.log():

for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '#';
    }
    console.log(line);
}
//5-Use loop to print the following pattern:
for(let i=0;i<=10;i++){
    console.log(`${i}X${i}=${i*i}`);
}

//6-Using loop print the following pattern
for(let i=0;i<=10;i++){
    console.log(`${i}  ${i*i}   ${i*i*i}`);
}

//7-Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0;i<=100;i+=2){
    console.log(i);
}

//8-Use for loop to iterate from 0 to 100 and print only odd numbers
for(i=1;i<=100;i+=2){
    console.log(i);
}

//9-Use for loop to iterate from 0 to 100 and print only prime numbers
let num=0;
let i,j;

for(i=2;i<=100;i++){
    for(j=1;j<=i;j++){
        if(i%j==0){
        num++;
      }
    }
    if(num==2)
    console.log(i);
    num=0;
}

//10-Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum=0;
for(let i=0; i<=100;i++){
    sum +=i;
}
console.log(sum);

//11-Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even =0;
let odd=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        even +=i;
    }else{
        odd +=i;
    }
    
}
//12-Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
console.log(even,odd);*/
