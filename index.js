// Header Start
let currentLocalTime = document.getElementsByClassName('cTime')[0];
let topToBottomScroller = document.getElementById('arrow');
let homePage = document.getElementsByTagName('ul')[0];
let homePageChilds = document.querySelectorAll('ul li');
let menuIcon = document.getElementById('hamburger');
let header = document.getElementsByTagName('header')[0];
let dropDown = document.getElementById('dropdown');

// hamburger menu for media query

menuIcon.addEventListener('click', e => {
    console.log(e)

    let abc = document.getElementsByTagName('ul')[0];
    let def = document.getElementsByTagName('ul')[0];
    abc.classList.toggle('fuck')


    if (abc.className === 'fuck') {

        menuIcon.innerHTML = 'X'
            // header.style.flexDirection = 'column'


        var mediaQuery = window.matchMedia("(max-width: 435px)");

        if (mediaQuery.matches) {



            header.style.flexDirection = 'column'
            abc.style.flexDirection = 'column';
            homePageChilds.forEach((element) => {
                element.style.margin = '1.9rem 0'

            })


        } else if (!mediaQuery.matches) {
            menuIcon.style.display = 'flex'
            header.style.flexDirection = 'row';
            abc.style.flexDirection = 'row';
            homePageChilds.forEach((element) => {
                element.style.margin = '0'
            })
        }
    } else {
        menuIcon.innerHTML = '&#9776;'
    }
})


// hamburger menu for media query

// TIMEZONE FINDER

let currentTimeZone = document.getElementsByClassName('timeZone')[0];

// TIMEZONE FINDER

// Current Time JS Start

function currentTime() {

    let currentTime = new Date();

    currentLocalTime.innerHTML = currentTime.toLocaleTimeString();

}

setInterval(currentTime, 10);

// Current Time JS Start

// Top to Bottom JS Start


topToBottomScroller.addEventListener('click', (e) => {

    e.preventDefault()
    window.scrollTo(0, 700);

})

// Top to Bottom JS End

// Header End

// Accessing CCurrent temperature etc

let currentTemperature = document.getElementById('clouds');
let currentHumidity = document.getElementById('humidity');
let currentWindSpeed = document.getElementById('wind');
let currentUltraVioletRays = document.getElementById('ultraViolet');
let weatherDescription = document.getElementById('weatherDescription');

// Accessing CCurrent temperature etc


// Images loader according to weather;

let weatherImages = ['./imgs/sunTwo(in).png', './imgs/sunnyAndCloudySynced(in).png', './imgs/cloudy(in).png', './imgs/rainyWeather(in).png', './imgs/rainAndSun(in).png', './imgs/moonlit(in).png', './imgs/moonfull night(in).png', './imgs/stormyNight(in).png', './imgs/SnowyNight(in).png', './imgs/snowyDay(in).png'];
let currentWeatherImage = document.getElementById('currentWeatherUpdate');

// Images loader according to weather;
// Weather Api Request Start

let API_KEY = '4f1b461e613bbd7d3b12a2255daf8413';

// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };

let userAgent = navigator.userAgent;
let browserName;

if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
    alert('Firefox does not support location access. Please use Chrome or any other browser')
    console.error('Browser does not support Geolocation API')
}

navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
    var crd = pos.coords;

    let anotherWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&exclude={part}&appid=${API_KEY}`

    fetch(anotherWeather).then(responce => {
        return responce.json();
    }).then(data => {


        let temperatureConverter = Math.ceil(data.current.temp - 271);
        let windSpeedConverter = Math.ceil(data.current.wind_speed);


        currentTimeZone.innerHTML = data.timezone;
        currentTemperature.innerHTML = temperatureConverter + '°';
        currentHumidity.innerHTML = data.current.humidity + ' ' + '%';
        currentWindSpeed.innerHTML = windSpeedConverter + ' ' + 'm/s';
        currentUltraVioletRays.innerHTML = data.current.uvi + ' ' + 'UV'

        if (data.current.clouds <= 35) {
            currentWeatherImage.src = weatherImages[0]
            weatherDescription.innerHTML = data.current.weather[0].description;
        }

        if (data.current.clouds > 35) {
            currentWeatherImage.src = weatherImages[1]
            weatherDescription.innerHTML = data.current.weather[0].description;

        }

        if (data.current.clouds >= 50) {
            currentWeatherImage.src = weatherImages[2]
            weatherDescription.innerHTML = data.current.weather[0].description;

        }

        if (data.current.clouds >= 50) {
            currentWeatherImage.src = weatherImages[2]
            weatherDescription.innerHTML = data.current.weather[0].description;

        }

        if (data.current.humidity >= 70) {
            currentWeatherImage.src = weatherImages[3]
            weatherDescription.innerHTML = data.current.weather[0].description;

        }

        if (temperatureConverter < 0) {
            currentWeatherImage.src = weatherImages[9]
            weatherDescription.innerHTML = data.current.weather[0].description;
        }

    }).catch(rejected => {
        console.error(`The Error respond is ${rejected}`)
    })
}

function error(err) {
    if (err) {

        alert('Location Access Is Necessary For a better User Experience')

        setTimeout(() => {

            location.href = './403Respond.html';

        }, 5000);
    }
}


// Weather Api Request End



// Weather Api Fetching For different Default Locations 



dropDown.addEventListener('change', (e) => {


        // New York Fetched
        if (e.target.value === 'New York, NY') {

            let anotherWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${40.7128}&lon=${-74.0059}&exclude={part}&appid=${API_KEY}`


            fetch(anotherWeather).then(serverRespond => {
                return serverRespond.json();
            }).then(data => {

                let temperatureConverter = Math.ceil(data.current.temp - 271);
                let windSpeedConverter = Math.ceil(data.current.wind_speed);


                currentTimeZone.innerHTML = data.timezone;
                currentTemperature.innerHTML = temperatureConverter + '°';
                currentHumidity.innerHTML = data.current.humidity + ' ' + '%';
                currentWindSpeed.innerHTML = windSpeedConverter + ' ' + 'm/s';
                currentUltraVioletRays.innerHTML = data.current.uvi + ' ' + 'UV'

                if (data.current.clouds <= 35) {
                    currentWeatherImage.src = weatherImages[0]
                    weatherDescription.innerHTML = data.current.weather[0].description;
                }

                if (data.current.clouds > 35) {
                    currentWeatherImage.src = weatherImages[1]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.clouds >= 50) {
                    currentWeatherImage.src = weatherImages[2]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.clouds >= 50) {
                    currentWeatherImage.src = weatherImages[2]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.humidity >= 70) {
                    currentWeatherImage.src = weatherImages[3]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (temperatureConverter < 0) {
                    currentWeatherImage.src = weatherImages[9]
                    weatherDescription.innerHTML = data.current.weather[0].description;
                }

            }).catch(error => {
                console.log(`The Error received while fetching is ${error}`)
            })


        }

        // New York Fetched

        // Washington Fetched
        if (e.target.value === 'Washington DC') {

            let anotherWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${38.897676}&lon=${-77.036530}&exclude={part}&appid=${API_KEY}`


            fetch(anotherWeather).then(serverRespond => {
                return serverRespond.json();
            }).then(data => {

                let temperatureConverter = Math.ceil(data.current.temp - 271);
                let windSpeedConverter = Math.ceil(data.current.wind_speed);


                currentTimeZone.innerHTML = data.timezone;
                currentTemperature.innerHTML = temperatureConverter + '°';
                currentHumidity.innerHTML = data.current.humidity + ' ' + '%';
                currentWindSpeed.innerHTML = windSpeedConverter + ' ' + 'm/s';
                currentUltraVioletRays.innerHTML = data.current.uvi + ' ' + 'UV'

                if (data.current.clouds <= 35) {
                    currentWeatherImage.src = weatherImages[0]
                    weatherDescription.innerHTML = data.current.weather[0].description;
                }

                if (data.current.clouds > 35) {
                    currentWeatherImage.src = weatherImages[1]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.clouds >= 50) {
                    currentWeatherImage.src = weatherImages[2]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.clouds >= 50) {
                    currentWeatherImage.src = weatherImages[2]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.humidity >= 70) {
                    currentWeatherImage.src = weatherImages[3]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (temperatureConverter < 0) {
                    currentWeatherImage.src = weatherImages[9]
                    weatherDescription.innerHTML = data.current.weather[0].description;
                }

            }).catch(error => {
                console.log(`The Error received while fetching is ${error}`)
            })



        }

        // washington Fetched
        // Los Angeles Fetched
        if (e.target.value === 'Los Angeles') {

            let anotherWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${34.052235}&lon=${-118.243683}&exclude={part}&appid=${API_KEY}`

            fetch(anotherWeather).then(respond => {
                return respond.json();
            }).then(data => {


                let temperatureConverter = Math.ceil(data.current.temp - 271);
                let windSpeedConverter = Math.ceil(data.current.wind_speed);


                currentTimeZone.innerHTML = data.timezone;
                currentTemperature.innerHTML = temperatureConverter + '°';
                currentHumidity.innerHTML = data.current.humidity + ' ' + '%';
                currentWindSpeed.innerHTML = windSpeedConverter + ' ' + 'm/s';
                currentUltraVioletRays.innerHTML = data.current.uvi + ' ' + 'UV'

                if (data.current.clouds <= 35) {
                    currentWeatherImage.src = weatherImages[0]
                    weatherDescription.innerHTML = data.current.weather[0].description;
                }

                if (data.current.clouds > 35) {
                    currentWeatherImage.src = weatherImages[1]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.clouds >= 50) {
                    currentWeatherImage.src = weatherImages[2]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.clouds >= 50) {
                    currentWeatherImage.src = weatherImages[2]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.humidity >= 70) {
                    currentWeatherImage.src = weatherImages[3]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (temperatureConverter < 0) {
                    currentWeatherImage.src = weatherImages[9]
                    weatherDescription.innerHTML = data.current.weather[0].description;
                }


            }).catch(error => {
                console.log(`The Error received while fetching is ${error}`)
            })



        }
        // Los angeles Fetched


        // Boston Fetched
        if (e.target.value === 'boston') {

            let anotherWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${38.897676}&lon=${-77.036530}&exclude={part}&appid=${API_KEY}`


            fetch(anotherWeather).then(serverRespond => {
                return serverRespond.json();
            }).then(data => {

                let temperatureConverter = Math.ceil(data.current.temp - 271);
                let windSpeedConverter = Math.ceil(data.current.wind_speed);


                currentTimeZone.innerHTML = data.timezone;
                currentTemperature.innerHTML = temperatureConverter + '°';
                currentHumidity.innerHTML = data.current.humidity + ' ' + '%';
                currentWindSpeed.innerHTML = windSpeedConverter + ' ' + 'm/s';
                currentUltraVioletRays.innerHTML = data.current.uvi + ' ' + 'UV'

                if (data.current.clouds <= 35) {
                    currentWeatherImage.src = weatherImages[0]
                    weatherDescription.innerHTML = data.current.weather[0].description;
                }

                if (data.current.clouds > 35) {
                    currentWeatherImage.src = weatherImages[1]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.clouds >= 50) {
                    currentWeatherImage.src = weatherImages[2]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.clouds >= 50) {
                    currentWeatherImage.src = weatherImages[2]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (data.current.humidity >= 70) {
                    currentWeatherImage.src = weatherImages[3]
                    weatherDescription.innerHTML = data.current.weather[0].description;

                }

                if (temperatureConverter < 0) {
                    currentWeatherImage.src = weatherImages[9]
                    weatherDescription.innerHTML = data.current.weather[0].description;
                }

            }).catch(error => {
                console.log(`The Error received while fetching is ${error}`)
            })



        }
        // Boston Fetched

    })
    // Weather Api Fetching For different Default Locations

// Footer JS


// bottom to top scroller

let topScrollerFromBottom = document.getElementById('scrollTop');

topScrollerFromBottom.addEventListener('click', (e) => {

    e.preventDefault()
    window.scrollTo(0, -700);

})


// bottom to top scroller



// Footer JS
