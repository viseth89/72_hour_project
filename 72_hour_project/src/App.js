import { useEffect, useState } from 'react';
import './App.css';
import WeatherApp from './Apps/WeatherApp/WeatherApp'
import TicketApp from './Apps/TicketApp/TicketApp'
import NasaApp from './Apps/NasaApp/NasaApp'

function App() {
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()


  useEffect( () => {
    console.log('app loaded')
    navigator.geolocation.getCurrentPosition(pos => {
      setLat(pos.coords.latitude)
      setLon(pos.coords.longitude)
      console.log(lat , lon);
    },
    error => console.log(error)
    )
  }, [])
  // Array Literal -> when I load

  return (
    <div className="App">
      <header className="App-header">
        {/* <WeatherApp /> */}
        <WeatherApp lat={lat} lon={lon}/>
        <TicketApp lat={lat} lon={lon}/>
        <NasaApp lat={lat} long={lon}/>
        
      </header>
    </div>
  )
}

export default App