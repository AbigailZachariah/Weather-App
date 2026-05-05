const apiKey = config.API_KEY;
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const WeatherIcon = document.querySelector(".icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }

            else {
                var data = await response.json();

                document.querySelector(".City").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                if (data.weather[0].main == "Clouds") {
                    WeatherIcon.src = "icons/clouds.png";
                }
                else if (data.weather[0].main == "Clear") {
                    WeatherIcon.src = "icons/clear.png";
                }
                else if (data.weather[0].main == "Drizzle") {
                    WeatherIcon.src = "icons/drizzle.png";
                }
                else if (data.weather[0].main == "Mist") {
                    WeatherIcon.src = "icons/mist.png";
                }
                else if (data.weather[0].main == "Rain") {
                    WeatherIcon.src = "icons/rain.png";
                }
                else if (data.weather[0].main == "Snow") {
                    WeatherIcon.src = "icons/snow.png";
                }

                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        })
