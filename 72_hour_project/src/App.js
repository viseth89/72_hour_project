import React from 'react'; 
import { BrowserRouter, Route } from "react-router-dom";
import Home from ".components/site/Home"
import NasaApp from "./components/Apps/NasaApp/NasaApp";
import SatPhoto from "./components/Apps/NasaApp/SatPhoto";
import './App.css';



function App() {
  return (

<div className="title">
      
    < Link to='/'>Home</Link>
    </div>


    
    <div>
    <Route exact path='/'><Home /></Route>
    </div>
  

    <BrowserRouter>
    <div>
      <Route component={NasaApp} path="/" exact />
      <Route component={SatPhoto} path="/satphoto" />
    </div>
  </BrowserRouter>
    
  );
}
    


export default App;
