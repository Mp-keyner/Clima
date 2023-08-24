document.addEventListener("DOMContentLoaded", function () {
  const weatherDataElement = document.getElementById("weather-data");

  const apiKey = "26c25a94171b06cf681d940caed738cf"; // Reemplaza con tu clave de API
  const city = "Colombia"; // Reemplaza con la ciudad que desees consultar
  const citys = ["panama", "china", "ecuador"];

  const GetInfoCitys = (x) => {
    console.log(x);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        console.log(data);
        const weatherInfo = `La temperatura en ${x} es ${temperature}°C y el clima es ${weatherDescription}.`;

        weatherDataElement.textContent += weatherInfo;
      })
      .catch((error) => {
        console.error("Error al obtener los datos del clima:", error);
        weatherDataElement.textContent =
          "No se pudo obtener la información del clima.";
      });
  };

  GetInfoCitys(citys[0]);
  GetInfoCitys(citys[1]);
  GetInfoCitys(citys[2]);
});
