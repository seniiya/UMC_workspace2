import React from 'react'


const MovieCard = ({ movie }) => (
    <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className='movie-info' key={movie.id}>
            <h2>{movie.title}</h2>
            <span>{movie.vote_average}</span>
        
        </div>
    </div>
);

export default MovieCard;