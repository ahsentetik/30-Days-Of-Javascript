//1-Write a program which tells the number of days in a month.
let month =prompt("Enter a month").toLowerCase();
let days;

let now=new Date();
let year=now.getFullYear();

if(month=="february"){
    if((year%4) == 0){
        console.log("February has a 29 days.");
    }else{
        console.log("February has a 28 days.");
    }
}else{
    switch(month){
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
           days = 31;
           break;
           
        case "april":
        case "june":
        case "september":
        case "november":
           days = 30;
           break;
     }
     console.log(month,"has",days,"days");

}