document.getElementById("search-button").addEventListener("click", function () {
    const city = document.getElementById("city-input").value;
   
    if (city) {
      fetchWeather(city);
    }
  });
  
  function fetchWeather(city, country) {
    const apiKey = "b6b7768e21ed0acfcc64d68f56dd7258"; // Tu clave de API de weatherstack
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
      <h2>Clima en ${data.location.name}, ${data.location.country}</h2>
      <p>Temperatura: ${data.current.temperature}°C</p>
      <p>Descripción: ${data.current.weather_descriptions[0]}</p>
      <img src="${data.current.weather_icons[0]}" alt="Clima">
      <p>Hora: ${data.current.observation_time}</p>
      
      
    `;
  }

  const ClimaButton = document.getElementById("search-button");

  ClimaButton.addEventListener("click", () => {
    console.log("Botón Clikeado");
  });

  document.addEventListener("keydown", (event) => {
    if(event.keyCode === 13)
    {
        ClimaButton.click();
    }
  });

 

  
  
  