document.addEventListener('DOMContentLoaded', function () {
    // OpenWeatherMap API 날씨 상태 번역 함수
    function translateWeatherCondition(conditionCode) {
        const translationMap = {
            'Clear': '☀️',
            'Clouds': '☁️',
            'Rain': '🌧️',
            'Snow': '❄️',
            'Thunderstorm': '⛈️',
            'Drizzle': '🌦️',
            'Mist': '🌫️',
        };

        return translationMap[conditionCode] || conditionCode;
    }

    function updateDate() {
        const currentDateElement = document.getElementById('current-date');

        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);

        currentDateElement.textContent = `${formattedDate}`;
    }

    
    updateDate();

    function setTemperatureImage(temperature) {
        const temperatureImageElement = document.getElementById('temperature-image');
        let imageUrl = '';

        if (temperature >= 27) {
            imageUrl = 'url("https://postfiles.pstatic.net/MjAyMzEyMTFfMTgx/MDAxNzAyMjIwOTYzOTcz.guR-SALUYMK2PfMpe4FFDXtL1HwsrtdFBeVESPJAAsog.GwviqOZIjwsQKe8jYu0KLM94HA9e38T1lRTkWWqRje4g.PNG.tory2174/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-12-11_000602.png?type=w773")';
        } else if (temperature >= 23) {
            imageUrl = 'url("https://postfiles.pstatic.net/MjAyMzEyMTFfNTUg/MDAxNzAyMjIwOTYzOTk3.9NSbQ8lNaV1z1zy5gzWx844KFzU02bCsbsQkYxY5kOAg.bYCeDqg3JlTPl5ShaMXAYysGCrbivGxyCVBmrF50ajAg.PNG.tory2174/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-12-11_000624.png?type=w773")';
        } else if (temperature >= 20) {
            imageUrl = 'url("https://postfiles.pstatic.net/MjAyMzEyMTFfMTY3/MDAxNzAyMjIwOTY0MDAy.LpkeTQW3zES6z8sT7tW8lMl1XftB_anhwMpxCoyk2FEg.MIP_uJC8HtwERPGvK8JA_29eqIvSB2C7yi-NpLJLEBkg.PNG.tory2174/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-12-11_000644.png?type=w773")';
        } else if (temperature >= 17) {
            imageUrl = 'url("https://postfiles.pstatic.net/MjAyMzEyMTFfMTg2/MDAxNzAyMjIwOTY0MDE1.4F4Q1edtMpStrmXvwAjnXC5Cy-PWYuLagGQ6V3-Fzokg.bJ9jEmljTVxq2bwyJCWViKKsmzWJDf5R931dJR4OWfUg.PNG.tory2174/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-12-11_000700.png?type=w773")';
        } else if (temperature >= 12) {
            imageUrl = 'url("https://postfiles.pstatic.net/MjAyMzEyMTFfMjU5/MDAxNzAyMjIwOTY0MDA1.ORSicyZfdAhhw9ArO0HTtMo_UbcdT-tp93LAAL04WJAg.rk1wW6TG7T54cOjvskNh__gm7-snBKClSZ1g5ytqGXcg.PNG.tory2174/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-12-11_000730.png?type=w773")';
        } else if (temperature >= 10) {
            imageUrl = 'url("https://postfiles.pstatic.net/MjAyMzEyMTFfMjE1/MDAxNzAyMjIwOTY0MDE1._U3nJRBmcNxTIaPDEH7eZZSK9X20rvex2iwwzkD1cDMg.Yk6taYVZ58YFPnUkAkHBWZ5LA6M1QdJqtjsR4aIq5qkg.PNG.tory2174/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-12-11_000818.png?type=w773")';
        } else if (temperature >= 6) {
            imageUrl = 'url("https://postfiles.pstatic.net/MjAyMzEyMTFfOTQg/MDAxNzAyMjIwOTY0MjM1.WXBc_aP5Ue-65keRT5Ho8rmjpUk3j50RkYttZr2WU-Ig.9MbskYDcL5RVU540sRf-xDGq6rmdwL-FO3SJVAgWnvAg.PNG.tory2174/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-12-11_000830.png?type=w773")';
        } else {
            imageUrl = 'url("https://postfiles.pstatic.net/MjAyMzEyMTFfODYg/MDAxNzAyMjIwOTY0MjU2.hplKBcOmAWAq_m5evKKnSgJhULZiBaVCHPuZhK8PGl0g._S4Qv3w773f0wXupNaCpj4BbD_OrOoPZ--H45m9OLbcg.PNG.tory2174/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-12-11_000858.png?type=w773")';
        }

        temperatureImageElement.style.backgroundImage = imageUrl;
    }

    function setWeatherBackground(condition) {
        // 여러 기상 상태에 대한 배경 이미지 URL을 설정
        const backgroundImageURLs = {
            'Clear': 'url("https://source.unsplash.com/ROVBDer29PQ/1600x900")',
            'Clouds': 'url("https://source.unsplash.com/78wDBw9ajUk/1600x900")',
            'Rain': 'url("https://source.unsplash.com/22x7fxFpl_8/1600x900")',
            'Snow': 'url("https://source.unsplash.com/2V3OzQZAIPs/1600x900")',
            'Thunderstorm': 'url(""https://source.unsplash.com/_hGPdpyMV-8/1600x900")',
            'Drizzle': 'url("https://source.unsplash.com/qPvBmSvmohs/1600x900")',
            'Mist': 'url("https://source.unsplash.com/kJgQlS9RxCs/1600x900")',
            
        };

        const body = document.body;
        const backgroundImage = backgroundImageURLs[condition];

        if (backgroundImage) {
            body.style.backgroundImage = backgroundImage;
        } else {
            // 기본 이미지 또는 처리할 수 없는 기상 상태에 대한 이미지를 설정
            body.style.backgroundImage = 'url("https://example.com/default-background.jpg")';
        }
    }

    // 기상 정보를 가져온 후 배경 이미지 설정
    function fetchWeatherAndSetBackground() {
        const apiKey = '77dc272c7fcc49d56b57c8e00521a656';
        const selectedCity = document.getElementById('cities').value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const condition = data.weather[0].main;
                setWeatherBackground(condition);

                const temperature = data.main.temp;
                setTemperatureImage(temperature);
            })
            .catch(error => {
                console.error('날씨 정보를 가져오는 중 에러 발생:', error);
            });
    }

    // 페이지 로드 시 기상 정보 가져오고 배경 이미지 설정
    fetchWeatherAndSetBackground();

    // 지역 선택이 변경될 때마다 기상 정보 다시 가져오고 배경 이미지 설정
    document.getElementById('cities').addEventListener('change', fetchWeatherAndSetBackground);

    // 외부 API에서 날씨 정보 가져오는 함수
    function fetchWeather() {
        const apiKey = '77dc272c7fcc49d56b57c8e00521a656';
        const selectedCity = document.getElementById('cities').value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temperature = Math.round(data.main.temp);
                const condition = translateWeatherCondition(data.weather[0].main);
                const city = selectedCity;

                document.getElementById('temperature').textContent = `${temperature}°C`;
                document.getElementById('city').textContent = `${city}`;
                document.getElementById('condition').textContent = `${condition}`;
                document.getElementById('min-max-temperature').textContent = `Max/Min Temp : ${Math.round(data.main.temp_min)}°C/${Math.round(data.main.temp_max)}°C`;
                document.getElementById('humidity').textContent = `Humidity : ${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `Wind : ${data.wind.speed} m/s`;
                document.getElementById('cloudiness').textContent = `Cloudy : ${data.clouds.all}%`;
            })
            .catch(error => {
                console.error('날씨 정보를 가져오는 중 에러 발생:', error);
                document.getElementById('temperature').textContent = '온도: 에러 발생';
                document.getElementById('condition').textContent = '상태: 에러 발생';
                document.getElementById('min-max-temperature').textContent = '최저기온: 에러 발생 / 최고기온: 에러 발생';
                document.getElementById('humidity').textContent = '습도: 에러 발생';
                document.getElementById('wind-speed').textContent = '풍속: 에러 발생';
                document.getElementById('cloudiness').textContent = '구름량: 에러 발생';
            });
    }

    // 페이지 로드 시 날씨 정보 가져오기
    fetchWeather();

    // 지역 선택이 변경될 때마다 날씨 정보 다시 가져오기
    document.getElementById('cities').addEventListener('change', fetchWeather);
});
