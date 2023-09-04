//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let now = new Date();

let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0'); // ayı 2 basamaklı hale getirir
let day = String(now.getDate()).padStart(2, '0'); // günü 2 basamaklı hale getirir
let hour = String(now.getHours()).padStart(2, '0'); // saati 2 basamaklı hale getirir
let minute = String(now.getMinutes()).padStart(2, '0'); // dakikayı 2 basamaklı hale getirir

console.log(`YYYY-MM-DD HH:mm: ${year}-${month}-${day} ${hour}:${minute}`);
//padStart() fonksiyonu belirlirli uzunluğa ulaşana kadar belirttiğimiz karakterle doldurmamıza yardımcı olur örneğin biz yukarda 0 ile doldurmasını belirttik.