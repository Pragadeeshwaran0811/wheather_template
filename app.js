const apiKey = '97397e9a56b37b6fcefdc1f3e62a5fe7';
    function getWeather() {
      const city = document.getElementById("city").value;
      document.getElementById("weather-result").innerHTML = "";
      document.getElementById("error-message").innerHTML = "";

      if (!city) {
        document.getElementById("error-message").innerHTML = "Please enter a city name.";
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('City not found');
          }
          return response.json();
        })
        .then(data => {
          const weatherResult = document.getElementById("weather-result");
          const errorMessage = document.getElementById("error-message");
          const cityName = data.name;
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const icon = data.weather[0].icon;
          const weatherHTML = `
            <div class="city-name">${cityName}</div>
            <img class="weather-icon" src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" />
            <div class="temperature">${temperature}°C</div>
            <div class="weather-description">${description}</div>
          `;
          weatherResult.innerHTML = weatherHTML;
        })
        .catch(error => {
          document.getElementById("error-message").innerHTML = error.message;
        });
    }