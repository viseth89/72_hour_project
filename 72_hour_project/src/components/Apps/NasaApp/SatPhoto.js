import React from "react";
import { useState, useEffect} from "react";

export default function SatPhoto() {

        const [photoData, setPhotoData] = useState(null);

        useEffect(() => {
            fetchPhoto();

            async function fetchPhoto() {
                const res = await fetch(
                    'https://api.nasa.gov/planetary/apod?api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'
                );

                const data = await res.json();
                setPhotoData(data);
            }
        }, []);
 
 
        return(
            <div>
                <img
                src={photoData.url} 
                alt = {photoData.title}/>
            </div>
        )
}
