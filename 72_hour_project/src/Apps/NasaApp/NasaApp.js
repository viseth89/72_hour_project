//You guys, this works in vanilla JS.


//let url = 'https://api.nasa.gov/planetary/earth/imagery?api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'

let testurl = 'https://api.nasa.gov/planetary/earth/imagery?lon=-86.4&lat=39.8&date=2021-02-01&api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'


//let key = '3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'
let satImage = document.querySelector('.satImage');

fetch(testurl)
.then(function(response) {
  console.log("Response:", response);
  return response.blob();
})

.then(function(photoBlob) {
  let objectURL = URL.createObjectURL(photoBlob);
  console.log("Object URL:", objectURL);
  satImage.src = objectURL;
  console.log("satImage.src:", satImage.src);
});
