const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => findCountries(data));
};
loadCountry();
const findCountries = (countries) => {
  const displayCountries = document.getElementById("countries");
  //   for (const country of countries) {
  //     console.log(country);
  //   }
  countries.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.className = "style-country";
    div.innerHTML = `
    <h3>Country : ${country.name.common} <img src="${country.flags.png}" width="30" height="20"> </br></br> Area : ${country.area}</h3>
    <h4>Capital : ${country.capital}</h4>
    <button onclick="detailsButton('${country.name.common}')" class="xpnd-btn" >Details</button>
    `;
    displayCountries.appendChild(div);
  });
};
const detailsButton = (name) => {
  // console.log(name);
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountry(data[0]));
};
const displayCountry = (data) => {
  console.log(data);
  const displayId = document.getElementById("display-id");
  displayId.innerHTML = `
  <h3>Recently Viewed Country</h3>
  <img src="${data.flags.png}" width="300">
  <h2>${data.name.common}</h2>
  <p>${data.population} peoples</p>
  <p>${data.region}</p>
  `;
};
