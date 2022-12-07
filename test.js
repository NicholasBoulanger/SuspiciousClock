// Set the API URL
const API_URL = 'https://api.weather.com/v1/geocode/37.8267/-122.4233/forecast/daily/3day.json?units=e&language=en-US&apiKey=';

// Use the fetch() method to make an HTTP request to the API
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // Process the API response and use the data in your code
    const forecast = data.forecast;
    const container = document.getElementById('weather-container');

    // Loop through the forecast data and create a table row for each day
    for (let day of forecast) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${day.date}</td>
        <td>${day.day.wx}</td>
        <td>${day.day.pop}%</td>
        <td>${day.day.min_temp}/${day.day.max_temp}</td>
      `;
      container.appendChild(row);
    }
  });