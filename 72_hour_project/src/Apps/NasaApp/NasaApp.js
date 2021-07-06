import React, { useState, useEffect } from "react";
import "./NasaApp.css";

const NasaApp = ({ lat, lon }) => {
  // Additionally, add a button that toggles between Fahrenheit and Centigrade when pulling from the weather API.
  // Api Key
  const key = "49Wtu9aKiDGK1hhVCS1UmurRddpM3W7tTBrUq97U"

  // Props or default lat/lon
  const [Lat, setLat] = useState(lat | 39.78);
  const [Lon, setLon] = useState(lon | -86.3);

  // Dynamic url made in useEffect()
  const [imgSrc, setImgSrc] = useState();

  let imgStyles = {
    height:"150px",
    width:"150px",
  }
  
  useEffect(() => {
    let nasaURL = `https://api.nasa.gov/planetary/earth/imagery?api_key=${key}&lon=${Lon}&lat=${Lat}`;

    console.log(nasaURL)
    fetch(nasaURL)
      .then(res => res.blob())
      .then((imgBlob) => 
        setImgSrc(URL.createObjectURL(imgBlob))
      )
  }, [])

  return (
    <div className="main">
      <img style={imgStyles} src={imgSrc} />
    </div>
  )
}

export default NasaApp;

// //You guys, this works in vanilla JS.

// //let url = 'https://api.nasa.gov/planetary/earth/imagery?api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'

// let testurl = 'https://api.nasa.gov/planetary/earth/imagery?lon=-86.4&lat=39.8&date=2021-02-01&api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'

// //let key = '3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'
// let satImage = document.querySelector('.satImage');

// fetch(testurl)
// .then(function(response) {
//   console.log("Response:", response);
//   return response.blob();
// })

// .then(function(photoBlob) {
//   let objectURL = URL.createObjectURL(photoBlob);
//   console.log("Object URL:", objectURL);
//   satImage.src = objectURL;
//   console.log("satImage.src:", satImage.src);
// });
