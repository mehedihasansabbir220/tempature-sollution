const API_KEY = `898a331752ca5fa7ab6b9472e89135f3
`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
   
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
};
const setInnertext = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperatur => {
    setInnertext('city', temperatur.name);
    const url = `
    http://openweathermap.org/img/wn/${temperatur.weather[0].icon}@2x.png
    `
    setInnertext('temperature', temperatur.main.temp);
    setInnertext('condition', temperatur.weather[0].main);
    const img = document.getElementById('weather-icon');
    img.setAttribute("src", url)
    console.log(temperatur)
}