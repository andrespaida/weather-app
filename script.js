const apiKey = '7fba3b65f033786295ecd4c87518428b'; // <-- Reemplaza con tu API Key de OpenWeatherMap

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  if (!city) {
    resultDiv.innerText = "Por favor, ingresa una ciudad.";
    return;
  }

  resultDiv.innerText = "Cargando...";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Ciudad no encontrada!");
    }

    const data = await response.json();
    const temp = data.main.temp;
    const description = data.weather[0].description;

    resultDiv.innerHTML = `
      <p><strong>${data.name}</strong></p>
      <p>🌡️ Temperatura: ${temp} °C</p>
      <p>📄 Condición: ${description}</p>
    `;
  } catch (error) {
    resultDiv.innerText = error.message;
  }
}
