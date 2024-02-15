// elements
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const cityName = document.querySelector(".city");
const theInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchBtn");
const weatherImage = document.querySelector(".Weather img");
const apiKey = "44888200602123ff8b3d66b9a35004ce";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = `${data.name}`;
  temp.innerHTML = `${Math.ceil(data.main.temp)}°C`;
  humidity.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${data.wind.speed}KM/H`;
  weatherImage.src = `images/${data.weather[0].main.toLowerCase()}.png`;
}

// checkWeather("palestine");
searchBtn.addEventListener("click", () => {
  checkWeather(`${theInput.value}`);
  document.querySelector(".Weather").style.display = "flex";
});
