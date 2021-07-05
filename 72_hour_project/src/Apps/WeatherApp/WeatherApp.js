import React, { useState, useEffect } from 'react'
import './WeatherApp.css'

const WeatherApp = () => {
    const [results, setResults] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        let lat = 39.78
        let lon = -86.30

        const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=eae82edb29f893b2de779e351325ef24'

        console.log(URL)

    //     fetch(URL)
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json()
    //             }
    //         })
    //         .then((data) => {
    //             console.log(data)
    //             setResults(data)
    //             // .then(fetchTemp())
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data: ", error)
    //             setError(error)
    //         })
    // }, [])


//    const fetchData = async () => {
//        try {
//            const response = await fetch(URL)
//            const json = await response.json()
//            console.log(json)
//            setResults(json)
//        }  catch (error) {
//            console.log("error", error)
//        } finally {
//         // const temp = await fetchTemp()
//        const temp = await Math.round((((results.main.temp) - 273.15) * 1.8) + 32)
//         document.getElementById('temp').innerHTML = temp + '&deg'
//        }
//    }
//    fetchData()
// }, [])

function fetchResults() {
    fetch(URL)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                console.log(data)
                setResults(data)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error)
                setError(error)
            })
            
            
        
    }fetchResults()
async function fetchTemp () {
        const tempResults = await fetchResults()
        const temp = Math.round((((results.main.temp) - 273.15) * 1.8) + 32)
        document.getElementById('temp').innerHTML = temp + '&deg'
    }fetchTemp()
}, 
    
    [])

    

    return (
        <div className="main">
            {/* <div>{JSON.stringify(results.weather[0].description)}</div> */}
            <div>{(results.weather[0].description)}</div>
            {/* <div id="temp"></div> */}
        </div>
    )

}

export default WeatherApp



//     let lat = 39.78
//     let lon = -86.30

//     useEffect(() => {
//         fetchResults()
//     }, [])

//     const fetchResults = () => {
//         const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eae82edb29f893b2de779e351325ef24`

//         fetch(URL)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data)
//             })
//     }