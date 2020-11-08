import React from 'react';
import CONST from '../Consts';

const setColor = (vote) => {
    if(vote > 7){
        return 'green';
    } else if(vote <= 7 && vote >= 5) {
        return 'yellow';
    } else {
        return 'red';
    }

}

const Movie = ({title, poster_path, overview, vote_average}) => (

    <div className="movie">
        <div className="face1">
            <img src={CONST.IMAGES_API + poster_path} alt={poster_path} className="imageMovie"/>
            <p className={`rating ${setColor(vote_average)}`}>{vote_average > 0 ? vote_average : "noVotes" }</p>
            <p className="movieTitle">{title}</p>
        </div>
    </div>
);


export default Movie;