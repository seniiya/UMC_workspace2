// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import MovieCard from './MovieCard';

// const TopRated = () => {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const fetchMovies = async () => {
//             const response = await axios.get(
//                 `https://api.themoviedb.org/3/movie/now_playing?api_key=1efcaf84f10ffaf1588ba14cda33695d&language=en-US&page=1`
//             );
//             setMovies(response.data.results);
//         };

//         fetchMovies();
//     }, []);

//     return (
//         <div>
//             {movies.map((movie) => <MovieCard movie={movie} /> )}
//         </div>
//     );
// };

// export default TopRated;

import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import useAxiosMovies from './Api.jsx';
import Loding from './Loding.jsx';

const TopRated = () => {
    const [loading, setLoding] = useState(true);
    const movies = useAxiosMovies('top_rated');

    useEffect (() => {            
        if (movies.length > 0) {
            setLoding(false);   
        } 
    }, [movies]);

    return (
        <div className='movie-container'>
            {loading ? <Loding/> : movies.map((movie) => <MovieCard key = {movie.id} movie={movie}/>)}
        </div>
    );
}

export default TopRated;