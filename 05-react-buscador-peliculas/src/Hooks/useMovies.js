import { searchMovies } from '../Service/movies';
import { useRef, useState } from 'react';

export function useMovies ({search}){
    const [movies, setMovies] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(null);
    const previousSearch = useRef(search); 

    const getMovies = async () => {
        if(search === previousSearch.current) return

        try {
            setLoading(true);
            setError(null);
            previousSearch.current = search;
            const newMovies = await searchMovies({search});
            setMovies(newMovies);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }
    return { movies, getMovies, Loading }
}