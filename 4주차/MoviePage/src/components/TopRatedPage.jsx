
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