 import React from 'react'

const WeatherApp = () => {
    // const [results, setResults] = useState([])

    const fetcher = () => {
    let lat = 39.78
    let lon = -86.30
    
    const URL = 'api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=eae82edb29f893b2de779e351325ef24'

        fetch(URL)
        .then(res => res.json())
        .then(json => console.log(json()))
        .catch(err => console.log(err))
    }
    

    return(
        <div className="main">
            <button onClick={fetcher}>Click Me</button>
        </div>
    )
    
}

export default WeatherApp