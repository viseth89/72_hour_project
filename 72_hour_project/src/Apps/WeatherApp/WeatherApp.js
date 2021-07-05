import React, { useState, useEffect } from 'react'
import './WeatherApp.css'

const WeatherApp = () => {
    const [results, setResults] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
    let lat = 39.78
    let lon = -86.30
    
    const URL = 'api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=eae82edb29f893b2de779e351325ef24'

        fetch(URL)
        // .then(res => res.json())
        // .then(json => setData(json))
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            setError(error)
        })
    }, [])

    if (error) return "Error!"
    
    return(
        <div className="main">
            <pre>{JSON.stringify(results)}</pre>
        </div>
    )
    
}

export default WeatherApp