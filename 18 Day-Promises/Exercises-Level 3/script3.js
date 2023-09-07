
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


//catsAPI'sini okuyun ve kedinin ortalama ağırlığını metrik birimde bulun.


async function getAverageWeight() {

    const response = await fetch(catsAPI);
    const data = await response.json();

    let totalWeight = 0;
    let count = 0;

    for (const breed of data) {
      const weight = parseFloat(breed.weight.metric.replace('kg', ''));

      if (weight) {
        totalWeight += weight;
        count++;
      }
    }

    if (count > 0) {
      return totalWeight / count;
    } else {
      console.error('Verilerde geçerli ağırlık bilgisi bulunamadı.');
    }
 
}

getAverageWeight()
  .then(averageWeight => {
    console.log(`Kedinin ortalama ağırlığı: ${averageWeight} kg`);
  })
  
//countriesAPI'sini okuyun ve en büyük(largest) 10 ülkeyi bulun.

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    
    data.sort((a, b) => b.population - a.population);
    const top10Countries = data.slice(0, 10);

    console.log('En büyük 10 ülke:');
    top10Countries.forEach((country, index) => {
      console.log(`${index + 1}. ${country.name} - Nüfus: ${country.population}`);
    });
  })
  
//countriesAPI'sini okuyun ve dünyada resmi olarak kullanılan toplam dil sayısını bulun.
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    let totalLanguages = 0;
    data.forEach((country) => {
      totalLanguages += country.languages.length;
    });

    console.log(totalLanguages);
  });