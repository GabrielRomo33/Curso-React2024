import { searchMovies } from '../Service/movies';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function useMovies ({search, sort}){
    const [movies, setMovies] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(null);
    const previousSearch = useRef(search); 

    const getMovies = useCallback(async ({search}) => {
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
    }, []);
    // useEffect(() => {
    //  console.log('another');
    // }, [getMovies])
    const sortedMovies = useMemo(() => {
        // console.log('Half Full Glass of Wine')
        return sort
        ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
        : movies
    }, [sort, movies]);
    return { movies: sortedMovies, getMovies, Loading }
}