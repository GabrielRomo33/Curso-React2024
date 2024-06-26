import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css'
import { Movies } from './Components/Movies';
import { useMovies } from './Hooks/useMovies';
import debounce from 'just-debounce-it';

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
  const [sort, setSort] = useState(false);
  const { search, updateSearch ,error } = useSearch();
  const { movies,Loading, getMovies } = useMovies({ search, sort });

  const debounceGetMovies = useCallback (
    debounce(search => {
    console.log('search', search);
    getMovies({ search });
    },300)
    ,[getMovies]
  );
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    getMovies({search});
    // const fields = new window.FormData(event.target);
    // const query = fields.get('query');
    // const query = Object.fromEntries(new window.FormData(event.target));
  }
  
  const handleSort = () => {
    setSort(!sort);
  }
  const handleChange = (event) => { 
    const newQuery = event.target.value;
    if(newQuery.startsWith(' ')) return;
    updateSearch(event.target.value);
    debounceGetMovies(newQuery);
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
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          Loading ? <p>Cargando... </p> : <Movies movies={movies}/>
        }
      </main> 
    </div>
  )
}

export default App
