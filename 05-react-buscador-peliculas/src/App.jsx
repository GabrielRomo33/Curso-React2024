import { useEffect, useRef, useState } from 'react';
import './App.css'

import { Movies } from './Components/Movies';
import { useMovies } from './Hooks/useMovies';

function App() {
const { movies } = useMovies();
const inputRef = useRef();

const [query, setQuery] = useState('');
const [error, setError] = useState(null);

const handleSubmit = (event) => {
  event.preventDefault();
  // const fields = new window.FormData(event.target);
  // const query = fields.get('query');
  // const query = Object.fromEntries(new window.FormData(event.target));
  console.log({query});
}

const handleChange = (event) => { 
  const newQuery = event.target.value;
  if(newQuery.startsWith('')) return
  setQuery(event.target.value);
}

useEffect(() => {
  if(query === ''){
    setError('No se puede retornal resultados de la busqueda sin un texto');
    return
  }
if(query.match(/^\d+$/)){
    setError('No se puede buscar solo con numeros');
    return
  }
  if(query.length < 3){
    setError('No se puede retornal resultados de la busqueda si el texto es menor de 3 caracteres');
    return
  }

  setError(null) ;
}, [query])


  return (
    <div className='page'>
      <h1>Buscador de Peliculas</h1>
      <header>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} type="text" name='query' id="" placeholder='Avengers, Lords of Rings, The Matrix' />
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
