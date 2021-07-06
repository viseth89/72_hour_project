import React, { useState, useEffect } from 'react'
import './WeatherApp.css'

const WeatherApp = ({lat, lon}) => {
    const [temp, setTemp] = useState()
    const [weatherDescription, setWeatherDescription] = useState("")
    const [Lat, setLat] = useState(lat | 39.78)
    const [Lon, setLon] = useState(lon | -86.30)

    useEffect(() => {
        
        const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + Lat + '&lon=' + Lon + '&appid=eae82edb29f893b2de779e351325ef24'

        console.log(URL)
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                console.log(json?.weather[0]?.description , json.main.temp)
                setWeatherDescription(json.weather[0].description)
                setTemp(json.main.temp)
            })
            .catch(() => console.error("Failed to get Weather Data API Fetch Failed"))
    }, [])
        
    return (
        <div className="main">
            {temp}
            <br />
            {weatherDescription}
        </div>
    )

}

export default WeatherApp