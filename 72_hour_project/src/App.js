import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude:null,
      longitude:null,
      userAddress:null
    };
    this.getLocation = this.getLocation.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
  }

  getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates)
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  getCoordinates(position) {
    console.log(position)
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }


  render() {
    return (
      <div className="App">
        <h2>
          React Geolocation Exmaple
        </h2>

        {this.getLocation()}
        {/* <button onClick={this.getLocation}>Get coordinates</button> */}
        <h4>HTML5 Coordinates</h4>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <h4>Google Maps Reverse Geocoding</h4>
        <p>Address: {this.state.userAddress}</p>
      </div>
    )    
  }
}






export default App;
