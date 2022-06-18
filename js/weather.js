const API_KEY = "7072ff746c6e440b8e44097dce441156";

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lng = position.coords.longitude; // 경도

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = `@ ${data.name} / `;
            weather.innerText = `/ ${data.weather[0].main}, ${data.main.temp}°C`;
        }); // js가 url을 부름 - console의 network에서 문서 확인 가능
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// ---------------
const weatherBox = document.querySelector(".weather__box");
const locateBtn = document.querySelector("#locateBtn");

function openWeatherBox() {
    weatherBox.classList.remove("weather_hidden");
}
function closeWeatherBox() {
    weatherBox.classList.add("weather_hidden");
}

locateBtn.addEventListener("mouseover", openWeatherBox);
locateBtn.addEventListener("mouseleave", closeWeatherBox);
