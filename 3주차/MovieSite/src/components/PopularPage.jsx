// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Popular = () => {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         getMovies();
//     }, []);

//     const getMovies = async () => {
//         const response = await 
//         axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1efcaf84f10ffaf1588ba14cda33695d');
//         setMovies(response.data.results);
//     };

//     return (
//         <div>
//             {movies.map(movie => (
//                 <div key={movie.id}>
//                     <h2>{movie.title}</h2>
//                     <p>{movie.overview}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Popular;



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

    // return (
    //     <div className='movie-container'>
    //         {loading ? <Loding/> : movies.map((movie) => <MovieCard movie = {movie} />)}
    //     </div>
    // );
    return (
        <div className='movie-container'>
            {loading ? <Loding/> : movies.map((movie) => <MovieCard key = {movie.id} movie={movie}/>)}
        </div>
    );
}

export default Popular;