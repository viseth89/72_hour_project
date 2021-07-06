import './App.css'
import WeatherApp from './Apps/WeatherApp/WeatherApp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherApp />
        <WeatherApp lat={55} lon={-85}/>
      </header>
    </div>
  )
}

export default App