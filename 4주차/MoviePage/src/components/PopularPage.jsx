



import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import useAxiosMovies from './Api.jsx';
import Loding from './Loding.jsx';


const Popular = () => {
    const [loading, setLoding] = useState(true);
    const movies = useAxiosMovies('popular');

    useEffect (() => {            // useEffect로 영화 목록 가져옴?
        if (movies.length > 0) {
            setLoding(false);   //로딩 완료 
        } 
    }, [movies]);

    
    return (
        <div className='movie-container'>
            {loading ? <Loding/> : movies.map((movie) => <MovieCard key = {movie.id} movie={movie}/>)}
        </div>
    );
}

export default Popular;