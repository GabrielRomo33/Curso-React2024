import { searchMovies } from '../Service/movies';
import { useState } from 'react';

export function useMovies ({search}){
    const [movies, setMovies] = useState([]);
    

    const getMovies = async () => {
       const newMovies = await searchMovies({search});
       setMovies(newMovies);
    }

    return { movies: mappedMovies, getMovies }
}