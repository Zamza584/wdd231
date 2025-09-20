const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=-12.04&lon=-77.1&units=imperial&appid=987071c38767660824820318095639c0";

const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-12.04&lon=-77.1&units=imperial&cnt=24&appid=987071c38767660824820318095639c0"; //used ai with help in getting an idea to how to get 3 days

const getWeather = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
};

getWeather(url).then((data) => displayWeather(data));
getWeather(forecastURL).then((data) => displayForecast(data));

const displayWeather = (weather) => {
  const currentWeather = document.querySelector("#current-weather");
  const description = document.querySelector("#weather-description");
  const weatherIcon = document.querySelector("#weather-icon");

  currentWeather.innerHTML = `${weather.main.temp}&deg;F`;
  description.innerHTML = `${weather.weather[0].description}`;
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", "weather icon");
};

const displayForecast = (data) => {
  console.log(data);

  const weatherForecast = document.querySelector("#weather-forecast");

  weatherList = data.list;

  // gets data list
  for (let i = 0; i < weatherList.length; i = i + 8) {
    const date = new Date(weatherList[i].dt_txt);
    console.log(date);

    const card = document.createElement("div");

    const time = document.createElement("p");
    const temp = document.createElement("p");
    const description = document.createElement("p");
    const icon = document.createElement("img");

    time.innerHTML = `<strong> ${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} </strong>`;
    temp.innerHTML = `Temperature: ${weatherList[i].main.temp}&deg;F`;
    description.innerHTML = `${weatherList[i].weather[0].description}`;
    icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weatherList[i].weather[0].icon}@2x.png`
    );
    icon.setAttribute("alt", "weather icon");

    card.appendChild(time);
    card.appendChild(temp);
    card.appendChild(description);
    card.appendChild(icon);

    weatherForecast.appendChild(card);
  }
};
