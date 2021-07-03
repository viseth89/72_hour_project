//let url = 'https://api.nasa.gov/planetary/earth/imagery?api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'

let testurl = 'https://api.nasa.gov/planetary/earth/imagery?lon=-86.4&lat=39.8&date=2021-02-01&api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'


//let key = '3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'


fetch(testurl)
  .then(response => response.blob())
  .then(myBlob => {
    testurl.src = URL.createObjectURL(myBlob);
    console.log(myBlob);
  })

  .then(function(myBlob) {
    let satImage = document.createElement('img')
    
    satImage.innerHTML = myBlob;
  


    myBlob.append(satImage);
});
