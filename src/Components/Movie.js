import React from 'react';
import CONST from '../Consts';


const Movie = ({title, poster_path, overview, vote_average}) => (

    <div className="movie">
        <div className="face1">
            <img src={CONST.IMAGES_API + poster_path} alt={poster_path} className="imageMovie"/>
            <p className="rating">{vote_average}</p>
            <p className="movieTitle">{title}</p>
        </div>
    </div>
);


export default Movie;