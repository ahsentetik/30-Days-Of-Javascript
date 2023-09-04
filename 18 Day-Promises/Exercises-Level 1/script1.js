//1
const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const name = country.name;
      const capital = country.capital;
      const languages = country.languages;
      const population = country.population;
      const area = country.area;

      console.log('Country:', name);
      console.log('Capital:', capital);
      console.log('Languages:', languages);
      console.log('Population:', population);
      console.log('Area:', area);
    });
  })
  .catch(error => console.error('Error fetching data:', error));