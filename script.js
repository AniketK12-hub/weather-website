function getWeather() {
    const city = ''; // Replace with desired city or input value
    const apiKey = 'c4fce5037cd23c55a1538be995be5b68'; // Your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the data for debugging
        })
        .catch(error => {
            console.error("Error fetching the weather data:", error);
        });
}

getWeather(); // Call the function to test
