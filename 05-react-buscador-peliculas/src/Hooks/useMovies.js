import withRsults from  '../mocks/with-results.json';
import withOutResults from  '../mocks/no-results.json';
import { useState } from 'react';

export function useMovies ({search}){
    const [responseMovies, setResponseMovies] = useState([]);
    const movies = responseMovies.Search;
    
    const mappedMovies = movies?.map(movie =>({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const getMovies = () => {
        if(search){
            // setResponseMovies(withRsults);
            fetch(`https://www.omdbapi.com/?apikey=c89ab1c3&s=${search}`)
            .then(res => res.json())
            .then(json => {
                setResponseMovies(json)
            });
        } else {
            setResponseMovies(withOutResults);
        }
    }

    return { movies: mappedMovies, getMovies }
}