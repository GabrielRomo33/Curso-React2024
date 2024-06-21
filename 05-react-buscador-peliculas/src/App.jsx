import { useEffect, useRef, useState } from 'react';
import './App.css'

import { Movies } from './Components/Movies';
import { useMovies } from './Hooks/useMovies';

function useSearch(){
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search === '';
      return
    }

    if(search === ''){
      setError('No se puede retornal resultados de la busqueda sin un texto');
      return
    }
    if(search.match(/^\d+$/)){
      setError('No se puede buscar solo con numeros');
      return
    }
    if(search.length < 3){
      setError('No se puede retornal resultados de la busqueda si el texto es menor de 3 caracteres');
      return
    }
  
    setError(null) ;
  }, [search])
  return {search,updateSearch,error};
}

function App() {
  const { search, updateSearch ,error } = useSearch();
  const { movies, getMovies } = useMovies({ search });

const handleSubmit = (event) => {
  event.preventDefault();
  getMovies();
  // const fields = new window.FormData(event.target);
  // const query = fields.get('query');
  // const query = Object.fromEntries(new window.FormData(event.target));
}

const handleChange = (event) => { 
  const newQuery = event.target.value;
  if(newQuery.startsWith(' ')) return;
  updateSearch(event.target.value);
}



  return (
    <div className='page'>
      <h1>Buscador de Peliculas</h1>
      <header>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderBlockColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search} type="text" name='query' id="" placeholder='Avengers, Lords of Rings, The Matrix' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          <Movies movies={movies}/>
        }
      </main> 
    </div>
  )
}

export default App
