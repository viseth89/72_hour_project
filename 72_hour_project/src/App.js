import React from 'react'; 
import { BrowserRouter, Route } from "react-router-dom";
import NasaApp from "./components/Apps/NasaApp/NasaApp";
//import NasaPhoto from "./components/Apps/NasaApp/SatPhoto";
import './App.css';

function App() {
  return (

    <BrowserRouter>
    <div>
      <Route component={NasaApp} path="/" exact />
      {/*<Route component={SatPhoto} path="/satphoto" />*/}
    </div>
  </BrowserRouter>
    
  );
}
    


export default App;
