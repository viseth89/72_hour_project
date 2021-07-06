import { useEffect, useState } from 'react';
import './App.css';
import WeatherApp from './Apps/WeatherApp/WeatherApp'

function App() {
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()


  useEffect( () => {
    console.log('app loaded')
    navigator.geolocation.getCurrentPosition(pos => {
      setLat(pos.coords.latitude)
      setLon(pos.coords.longitude)
    })
  }, [])
  // Array Literal -> when I load

  return (
    <div className="App">
      {lat} <br/> {lon}
      <header className="App-header">
        <WeatherApp />
        <WeatherApp lat={lat} lon={lon}/>
      </header>
    </div>
  );
}

export default App;