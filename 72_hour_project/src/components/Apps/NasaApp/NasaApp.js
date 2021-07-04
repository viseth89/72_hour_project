import React from 'react';

import { Link } from 'react-router-dom';

export default function NasaApp() {

    return(
        <div>
            <Link to="/satphoto">Basic Link to manually input URL</Link>
        </div>
    );
}