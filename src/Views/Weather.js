import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring'
const api = {
    key :"08e86b1c7d6ad47d953003a32acb6091",
    base: "https://api.openweathermap.org/data/2.5/"
}

// Di page ini, terdapat aplikasi cuaca dimana user bisa mendapatkan informasi tentang cuaca di berbagai daerah
// Untuk menggunakannya, cukup masukkan nama kota pada kolom dan tekan enter
// Informasi tentang suhu serta cuaca di kota tersebut akan muncul

function Weather(){

    const [show, set] = useState(false)
    const transitions = useTransition(show, null, {
        from: { transform: 'translate3d(0,-100px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { opacity: 0  }, 
    })

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    set(false)
                    setWeather(result);
                    setQuery('');
                    set(true)
                    console.log(result);
                });
        }
    }

    const dateBuilder= (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
        "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        
        return `${day}, ${date} ${month} ${year}`
    }

    return(
    <div className=" bg-cover bg-bottom min-h-screen" id={typeof weather.main != "undefined" ? (((weather.main.temp) > 16) ? 'layoutwarm' : 'layout') : 'layout'}>
        <main className=" min-h-screen p-5">
            <div className="w-full mb-20" id="search-box">
                <input
                    type="text"
                    className=" block w-full p-3 -mt-5 appearance-none border-none outline-none"
                    id="search-bar"
                    placeholder="Search..."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
            {transitions.map(({ item, key, props }) =>
            item && <animated.div key={key} style={props} className="ml-3">
                {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="" id="location-box">
                        <div className=" text-center font-medium" id="location">{weather.name}, {weather.sys.country}</div>
                        <div className=" text-center font-light font-style: italic" id="date">{dateBuilder(new Date())}</div>
                    </div>
                    <div className="text-center" id="weather-box">
                        <div className="relative inline-block font-black" id="temp">
                        {Math.round(weather.main.temp)}°C
                    </div>
                    <div className="font-bold -mt-6 " id="weather">{weather.weather[0].main}</div>
                    </div>
                </div>
            ): ('')}   
            </animated.div>
            )}     
        </main>
    </div>
    )
}

export default Weather