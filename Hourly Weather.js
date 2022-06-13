let API_KEY = '4f1b461e613bbd7d3b12a2255daf8413';
let cardTimeZone = document.querySelectorAll('#timeZone'); //=>CARDS TIMEZONE
let cardsTime = document.querySelectorAll('.cardsDay'); //CARDS TIME
let cardWeatherimage = document.querySelectorAll('.weatherIcon img'); //CARDS image
let cardWeatherDescription = document.querySelectorAll('.weatherIcon p'); //CARDS image description
let cardWindSpeed = document.querySelectorAll('#windSpeed'); //CARDS Wind
let cardClouds = document.querySelectorAll('#clouds'); //CARDS CLOUDS
let cardUltraVioletRays = document.querySelectorAll('#uvrays'); //CARDS UV RAYS
let cardTemperature = document.querySelectorAll('#ctemp'); //CARDS Temperature
let allTheCardsContainer = document.querySelectorAll('.containerOne'); //Cards Container .
let currentWeatherDescription = document.getElementById('weatherDescription'); //current weather description  
let currentWeatherImages = document.getElementById('currentWeatherUpdate');
let cardImages = document.getElementsByClassName('cardAllImages'); //for EventListener
let currentWindSpeed = document.getElementById('wind'); //for EventListener
let cardsWind = document.getElementsByClassName('cardsWind'); //for EventListener



// hamburger menu for media query
// Header Start
let currentLocalTime = document.getElementsByClassName('cTime')[0];
let topToBottomScroller = document.getElementById('arrow');
let homePage = document.getElementsByTagName('ul')[0];
let homePageChilds = document.querySelectorAll('ul li');
let menuIcon = document.getElementById('hamburger');
let header = document.getElementsByTagName('header')[0];
let dropDown = document.getElementById('dropdown');
let currentTimeZone = document.getElementsByClassName('currentTimeZone')[0];


menuIcon.addEventListener('click', e => {

    console.log(e)
    let abc = document.getElementsByTagName('ul')[0];
    let def = document.getElementsByTagName('ul')[0];
    abc.classList.toggle('fuck')


    if (abc.className === 'fuck') {

        currentTimeZone.style.display = 'none';

        menuIcon.innerHTML = 'X'
            // header.style.flexDirection = 'column'


        var mediaQuery = window.matchMedia("(max-width: 455px)");

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

// Hamburger start




let topScrollerFromBottom = document.getElementById('scrollTop');

topScrollerFromBottom.addEventListener('click', (e) => {

    e.preventDefault()
    window.scrollTo(0, -900);

})

topToBottomScroller.addEventListener('click', (e) => {

    e.preventDefault()
    window.scrollTo(0, 1000);

})


 


let userAgent = navigator.userAgent;
let browserName;

if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
    alert('Firefox does not support location access. Please use Chrome or any other browser')
    console.error('Browser does not support Geolocation API')
}







let success = (gpsLocation) => {

    let weatherApiAccess = `https://api.openweathermap.org/data/2.5/onecall?lat=${gpsLocation.coords.latitude}&lon=${gpsLocation.coords.longitude}&exclude={part}&appid=${API_KEY}`

    fetch(weatherApiAccess).then(respond => {
        return respond.json();
    }).then(data => {






        console.log(data)
            // timeZone ForEach Start
        cardTimeZone.forEach((array) => {
                array.innerHTML = data.timezone
            })
            // timeZone ForEach End



        // time ForEach Start
        cardsTime.forEach(time => {

                // Monday Time Card Start

                if (time.innerHTML === 'Monday') {

                    let timeConverter = new Date(data.hourly[0].dt * 1000);
                    let hour = timeConverter.getHours();

                    if (hour >= 12) {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'PM';

                    } else {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'AM';

                    }

                }
                // Monday Time Card End

                // Tuesday Time Card Start

                if (time.innerHTML === 'Tuesday') {

                    let timeConverter = new Date(data.hourly[3].dt * 1000);
                    let hour = timeConverter.getHours();

                    if (hour >= 12) {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'PM';

                    } else {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'AM';

                    }

                }
                // Tuesday Time Card End



                // Wensday Time Card Start

                if (time.innerHTML === 'Wednesday') {

                    let timeConverter = new Date(data.hourly[6].dt * 1000);
                    let hour = timeConverter.getHours();


                    if (hour >= 12) {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'PM';

                    } else {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'AM';

                    }


                }
                // Wednesday Time Card End

                // Thursday Time Card Start

                if (time.innerHTML === 'Thursday') {

                    let timeConverter = new Date(data.hourly[7].dt * 1000);
                    let hour = timeConverter.getHours();

                    if (hour >= 12) {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'PM';

                    } else {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'AM';

                    }

                }
                // Tuesday Time Card End

                // Friday Time Card Start

                if (time.innerHTML === 'Friday') {

                    let timeConverter = new Date(data.hourly[10].dt * 1000);
                    let hour = timeConverter.getHours();

                    if (hour >= 12) {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'PM';

                    } else {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'AM';

                    }

                }
                // Friday Time Card End

                // Satursday Time Card Start

                if (time.innerHTML === 'Satursday') {

                    let timeConverter = new Date(data.hourly[14].dt * 1000);
                    let hour = timeConverter.getHours();

                    if (hour >= 12) {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'PM';

                    } else {

                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'AM';

                    }

                }
                // Satursday Time Card End


                // Sunday Time Card Start

                if (time.innerHTML === 'Sunday') {

                    let timeConverter = new Date(data.hourly[20].dt * 1000);
                    let hour = timeConverter.getHours();

                    if (hour >= 12) {
                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'PM';

                    } else {
                        hour = hour % 12;
                        time.innerHTML = hour + ' ' + 'AM';
                    }
                }
            })
            // Sunday Time Card END
            // time ForEach END



        // WIND FOREach Start
        let windUnit = '  m/s'

        cardWindSpeed.forEach(winds => {

                if (winds.innerHTML === '10 m/s') {
                    winds.innerHTML = Math.ceil(data.hourly[44].wind_speed) + windUnit;
                }

                if (winds.innerHTML === '2 m/s') {
                    winds.innerHTML = Math.ceil(data.hourly[3].wind_speed) + windUnit;
                }

                if (winds.innerHTML === '3 m/s') {
                    winds.innerHTML = Math.ceil(data.hourly[6].wind_speed) + windUnit;
                }

                if (winds.innerHTML === '4 m/s') {
                    winds.innerHTML = Math.ceil(data.hourly[7].wind_speed) + windUnit;
                }

                if (winds.innerHTML === '5 m/s') {
                    winds.innerHTML = Math.ceil(data.hourly[10].wind_speed) + windUnit;
                }

                if (winds.innerHTML === '6 m/s') {
                    winds.innerHTML = Math.ceil(data.hourly[14].wind_speed) + windUnit;
                }

                if (winds.innerHTML === '7 m/s') {
                    winds.innerHTML = Math.ceil(data.hourly[20].wind_speed) + windUnit;
                }
            })
            // WIND FOREach END



        // CLOUDS ForEach Start

        cardClouds.forEach((clouds) => {

            if (clouds.innerHTML === '20 %') {
                clouds.innerHTML = data.hourly[0].clouds + ' ' + '%';
            }

            if (clouds.innerHTML === '21 %') {
                clouds.innerHTML = data.hourly[3].clouds + ' ' + '%';
            }

            if (clouds.innerHTML === '22 %') {
                clouds.innerHTML = data.hourly[6].clouds + ' ' + '%';
            }

            if (clouds.innerHTML === '23 %') {
                clouds.innerHTML = data.hourly[7].clouds + ' ' + '%';

            }

            if (clouds.innerHTML === '24 %') {
                clouds.innerHTML = data.hourly[10].clouds + ' ' + '%';


            }

            if (clouds.innerHTML === '25 %') {
                clouds.innerHTML = data.hourly[14].clouds + ' ' + '%';


            }

            if (clouds.innerHTML === '26 %') {
                clouds.innerHTML = data.hourly[20].clouds + ' ' + '%';


            }

        })

        // CLOUDS ForEach END


        // UVRAYS START
        let uvRaysUnit = '   UV'
        cardUltraVioletRays.forEach((UVRAYS) => {

                if (UVRAYS.innerHTML === '10 UV') {
                    UVRAYS.innerHTML = Math.ceil(data.hourly[0].uvi) + uvRaysUnit;
                }

                if (UVRAYS.innerHTML === '11 UV') {
                    UVRAYS.innerHTML = Math.ceil(data.hourly[3].uvi) + uvRaysUnit;
                }

                if (UVRAYS.innerHTML === '12 UV') {
                    UVRAYS.innerHTML = Math.ceil(data.hourly[6].uvi) + uvRaysUnit;
                }

                if (UVRAYS.innerHTML === '13 UV') {
                    UVRAYS.innerHTML = Math.ceil(data.hourly[7].uvi) + uvRaysUnit;
                }

                if (UVRAYS.innerHTML === '14 UV') {
                    UVRAYS.innerHTML = Math.ceil(data.hourly[10].uvi) + uvRaysUnit;
                }

                if (UVRAYS.innerHTML === '15 UV') {
                    UVRAYS.innerHTML = Math.ceil(data.hourly[14].uvi) + uvRaysUnit;
                }

                if (UVRAYS.innerHTML === '16 UV') {
                    UVRAYS.innerHTML = Math.ceil(data.hourly[20].uvi) + uvRaysUnit;
                }
            })
            // UVRAYS END

        // TEMPERATURE START
        cardTemperature.forEach((temps) => {

            if (temps.innerHTML === '25°') {
                let temperatureConverter = Math.ceil(data.hourly[0].temp - 271);
                temps.innerHTML = temperatureConverter + '°';
            }

            if (temps.innerHTML === '26°') {
                let temperatureConverter = Math.ceil(data.hourly[3].temp - 271);
                temps.innerHTML = temperatureConverter + '°';
            }

            if (temps.innerHTML === '27°') {
                let temperatureConverter = Math.ceil(data.hourly[6].temp - 271);
                temps.innerHTML = temperatureConverter + '°';
            }
            if (temps.innerHTML === '28°') {
                let temperatureConverter = Math.ceil(data.hourly[7].temp - 271);
                temps.innerHTML = temperatureConverter + '°';
            }
            if (temps.innerHTML === '29°') {
                let temperatureConverter = Math.ceil(data.hourly[10].temp - 271);
                temps.innerHTML = temperatureConverter + '°';
            }
            if (temps.innerHTML === '30°') {
                let temperatureConverter = Math.ceil(data.hourly[14].temp - 271);
                temps.innerHTML = temperatureConverter + '°';
            }
            if (temps.innerHTML === '31°') {
                let temperatureConverter = Math.ceil(data.hourly[20].temp - 271);
                temps.innerHTML = temperatureConverter + '°';
            }
        })

        // TEMPERATURE END

        // WEATHER IMAGES ACCORDING START
        let weatherImages = ['./imgs/sunTwo(in).png', './imgs/sunnyAndCloudySynced(in).png', './imgs/cloudy(in).png', './imgs/rainyWeather(in).png', './imgs/rainAndSun(in).png', './imgs/moonlit(in).png', './imgs/moonfull night(in).png', './imgs/stormyNight(in).png', './imgs/SnowyNight(in).png', './imgs/snowyDay(in).png'];

        cardWeatherimage.forEach((images) => {
            // FOR CARD IMAGes
            if (images.alt === 'imgOne') {

                if (data.hourly[0].clouds <= 35) {
                    images.src = weatherImages[0]
                }

                if (data.hourly[0].clouds > 35) {
                    images.src = weatherImages[1]
                }

                if (data.hourly[0].clouds >= 50) {
                    images.src = weatherImages[2]
                }

                if (data.hourly[0].clouds >= 70) {
                    images.src = weatherImages[3]
                }

                if (data.hourly[0].clouds < 0) {
                    images.src = weatherImages[9]
                }


            }

            if (images.alt === 'imgTwo') {

                if (data.hourly[3].clouds <= 35) {
                    images.src = weatherImages[0]
                }

                if (data.hourly[3].clouds > 35) {
                    images.src = weatherImages[1]
                }

                if (data.hourly[3].clouds >= 50) {
                    images.src = weatherImages[2]
                }

                if (data.hourly[3].clouds >= 70) {
                    images.src = weatherImages[3]
                }

                if (data.hourly[3].clouds < 0) {
                    images.src = weatherImages[9]
                }


            }

            if (images.alt === 'imgThree') {

                if (data.hourly[6].clouds <= 35) {
                    images.src = weatherImages[0]
                }

                if (data.hourly[6].clouds > 35) {
                    images.src = weatherImages[1]
                }

                if (data.hourly[6].clouds >= 50) {
                    images.src = weatherImages[2]
                }

                if (data.hourly[6].clouds >= 70) {
                    images.src = weatherImages[3]
                }

                if (data.hourly[6].clouds < 0) {
                    images.src = weatherImages[9]
                }
            }

            if (images.alt === 'imgFour') {

                if (data.hourly[7].clouds <= 35) {
                    images.src = weatherImages[0]
                }

                if (data.hourly[7].clouds > 35) {
                    images.src = weatherImages[1]
                }

                if (data.hourly[7].clouds >= 50) {
                    images.src = weatherImages[2]
                }

                if (data.hourly[7].clouds >= 70) {
                    images.src = weatherImages[3]
                }

                if (data.hourly[7].clouds < 0) {
                    images.src = weatherImages[9]
                }
            }

            if (images.alt === 'imgFive') {

                if (data.hourly[10].clouds <= 35) {
                    images.src = weatherImages[0]
                }

                if (data.hourly[10].clouds > 35) {
                    images.src = weatherImages[1]
                }

                if (data.hourly[10].clouds >= 50) {
                    images.src = weatherImages[2]
                }

                if (data.hourly[10].clouds >= 70) {
                    images.src = weatherImages[3]
                }

                if (data.hourly[10].clouds < 0) {
                    images.src = weatherImages[9]
                }
            }

            if (images.alt === 'imgSix') {

                if (data.hourly[14].clouds <= 35) {
                    images.src = weatherImages[0]
                }

                if (data.hourly[14].clouds > 35) {
                    images.src = weatherImages[1]
                }

                if (data.hourly[14].clouds >= 50) {
                    images.src = weatherImages[2]
                }

                if (data.hourly[14].clouds >= 70) {
                    images.src = weatherImages[3]
                }

                if (data.hourly[14].clouds < 0) {
                    images.src = weatherImages[9]
                }
            }

            if (images.alt === 'imgSeven') {

                if (data.hourly[20].clouds <= 35) {
                    images.src = weatherImages[0]
                }

                if (data.hourly[20].clouds > 35) {
                    images.src = weatherImages[1]
                }

                if (data.hourly[20].clouds >= 50) {
                    images.src = weatherImages[2]
                }

                if (data.hourly[20].clouds >= 70) {
                    images.src = weatherImages[3]
                }

                if (data.hourly[20].clouds < 0) {
                    images.src = weatherImages[9]
                }
            }

        })

        // WEATHER IMAGES ACCORDING END

        // WeatherDescription Start
        cardWeatherDescription.forEach((descrips) => {

                if (descrips.innerHTML === 'Storming Rain') {
                    descrips.innerHTML = data.hourly[0].weather[0].description;
                }

                if (descrips.innerHTML === 'hailStorm') {
                    descrips.innerHTML = data.hourly[3].weather[0].description;
                }

                if (descrips.innerHTML === 'ThunderStorm') {
                    descrips.innerHTML = data.hourly[6].weather[0].description;
                }

                if (descrips.innerHTML === 'Sunny') {
                    descrips.innerHTML = data.hourly[7].weather[0].description;
                }

                if (descrips.innerHTML === 'Cloudy') {
                    descrips.innerHTML = data.hourly[10].weather[0].description;
                }

                if (descrips.innerHTML === 'Raining') {
                    descrips.innerHTML = data.hourly[14].weather[0].description;
                }

                if (descrips.innerHTML === 'bolt') {
                    descrips.innerHTML = data.hourly[20].weather[0].description;
                }
            })
            // WeatherDescription End

        // CONNECTING THE MAIN DETAILED WEATHER WITH CARDS MEANING IF SOMEONE CLICK ALL THE INFORMATION SHOULD GO TO THE DETAILED WEATHER OF THE CLICKED CARD






        // CONNECTING THE MAIN DETAILED WEATHER WITH CARDS MEANING IF SOMEONE CLICK ALL THE INFORMATION SHOULD GO TO THE DETAILED WEATHER OF THE CLICKED CARD
        let currentWeatherData = document.querySelectorAll('.Images p');
        let currentweatherdes = document.getElementsByClassName('cardsWeatherDescription');
        let currentHumidity = document.getElementById('humidity');
        let currentTempt = document.getElementById('currentClouds');
        let cardTempt = document.getElementsByClassName('cardTemps');
        let currentUVRAYS = document.getElementById('ultraViolet');
        let cardUVRAYS = document.getElementsByClassName('cardUVRAYS');
        let cardsTIme = document.getElementsByClassName('cardsDay');
        let currenttime = document.getElementsByClassName('cTime')[0];
        let currentTimeZone = document.getElementsByClassName('currentTimeZone')[0];
        let cardsTimeZone = document.getElementsByClassName('cardsTimeZone');


        allTheCardsContainer.forEach(cards => {

            if (cards.id === 'containerOne') {

                cards.addEventListener('click', e => {

                    currentWeatherImages.src = cardImages[0].src;
                    currentWeatherDescription.innerHTML = currentweatherdes[0].innerHTML;
                    currentWindSpeed.innerHTML = cardsWind[0].innerHTML;
                    currentHumidity.innerHTML = data.hourly[0].humidity + '   %';
                    currentTempt.innerHTML = cardTempt[0].innerHTML;
                    currentUVRAYS.innerHTML = cardUVRAYS[0].innerHTML;
                    currenttime.innerHTML = cardsTIme[0].innerHTML;
                    currentTimeZone.innerHTML = cardsTimeZone[0].innerHTML;
                    window.scrollTo(0, -1000);



                })
            }

            if (cards.id === 'containerTwo') {
                cards.addEventListener('click', e => {

                    currentWeatherImages.src = cardImages[1].src;
                    currentWeatherDescription.innerHTML = currentweatherdes[1].innerHTML
                    currentWindSpeed.innerHTML = cardsWind[1].innerHTML
                    currentHumidity.innerHTML = data.hourly[3].humidity + '   %';
                    currentTempt.innerHTML = cardTempt[1].innerHTML;
                    currentUVRAYS.innerHTML = cardUVRAYS[1].innerHTML;
                    currenttime.innerHTML = cardsTIme[1].innerHTML;
                    currentTimeZone.innerHTML = cardsTimeZone[1].innerHTML;
                    window.scrollTo(0, -1000);
                })
            }

            if (cards.id === 'containerThree') {
                cards.addEventListener('click', e => {

                    currentWeatherImages.src = cardImages[2].src;
                    currentWeatherDescription.innerHTML = currentweatherdes[2].innerHTML
                    currentWindSpeed.innerHTML = cardsWind[2].innerHTML
                    currentHumidity.innerHTML = data.hourly[6].humidity + '   %';
                    currentTempt.innerHTML = cardTempt[2].innerHTML;
                    currentUVRAYS.innerHTML = cardUVRAYS[2].innerHTML;
                    currenttime.innerHTML = cardsTIme[2].innerHTML;
                    currentTimeZone.innerHTML = cardsTimeZone[2].innerHTML;
                    window.scrollTo(0, -1000);

                })
            }

            if (cards.id === 'containerFour') {
                cards.addEventListener('click', e => {

                    currentWeatherImages.src = cardImages[3].src;
                    currentWeatherDescription.innerHTML = currentweatherdes[3].innerHTML
                    currentWindSpeed.innerHTML = cardsWind[3].innerHTML
                    currentHumidity.innerHTML = data.hourly[7].humidity + '   %';
                    currentTempt.innerHTML = cardTempt[3].innerHTML;
                    currentUVRAYS.innerHTML = cardUVRAYS[3].innerHTML;
                    currenttime.innerHTML = cardsTIme[3].innerHTML;
                    currentTimeZone.innerHTML = cardsTimeZone[3].innerHTML;
                    window.scrollTo(0, -1000);

                })
            }

            if (cards.id === 'containerFive') {
                cards.addEventListener('click', e => {

                    currentWeatherImages.src = cardImages[4].src;
                    currentWeatherDescription.innerHTML = currentweatherdes[4].innerHTML
                    currentWindSpeed.innerHTML = cardsWind[4].innerHTML
                    currentHumidity.innerHTML = data.hourly[10].humidity + '   %';
                    currentTempt.innerHTML = cardTempt[4].innerHTML;
                    currentUVRAYS.innerHTML = cardUVRAYS[4].innerHTML;
                    currenttime.innerHTML = cardsTIme[4].innerHTML;
                    currentTimeZone.innerHTML = cardsTimeZone[4].innerHTML;
                    window.scrollTo(0, -1000);

                })
            }

            if (cards.id === 'containerSix') {
                cards.addEventListener('click', e => {

                    currentWeatherImages.src = cardImages[5].src;
                    currentWeatherDescription.innerHTML = currentweatherdes[5].innerHTML
                    currentWindSpeed.innerHTML = cardsWind[5].innerHTML
                    currentHumidity.innerHTML = data.hourly[14].humidity + '   %';
                    currentTempt.innerHTML = cardTempt[5].innerHTML;
                    currentUVRAYS.innerHTML = cardUVRAYS[5].innerHTML;
                    currenttime.innerHTML = cardsTIme[5].innerHTML;
                    currentTimeZone.innerHTML = cardsTimeZone[5].innerHTML;
                    window.scrollTo(0, -1000);


                })
            }

            if (cards.id === 'containerSeven') {
                cards.addEventListener('click', e => {

                    currentWeatherImages.src = cardImages[6].src;
                    currentWeatherDescription.innerHTML = currentweatherdes[6].innerHTML
                    currentWindSpeed.innerHTML = cardsWind[6].innerHTML
                    currentHumidity.innerHTML = data.hourly[20].humidity + '   %';
                    currentTempt.innerHTML = cardTempt[6].innerHTML;
                    currentUVRAYS.innerHTML = cardUVRAYS[6].innerHTML;
                    currenttime.innerHTML = cardsTIme[6].innerHTML;
                    currentTimeZone.innerHTML = cardsTimeZone[6].innerHTML;
                    window.scrollTo(0, -1000);


                })
            }

        })






        // CONNECTING THE MAIN DETAILED WEATHER WITH CARDS MEANING IF SOMEONE CLICK ALL THE INFORMATION SHOULD GO TO THE DETAILED WEATHER OF THE CLICKED CARD

    }).catch(error => {
        console.error(`Error respond is ${error}`)
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

navigator.geolocation.getCurrentPosition(success, error);
