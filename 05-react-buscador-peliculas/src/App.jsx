import './App.css'

import { Movies } from './Components/Movies';
import { useMovies } from './Hooks/useMovies';

function App() {
const { movies: mappedMovies } = useMovies();
  return (
    <div className='page'>
      <h1>Buscador de Peliculas</h1>
      <header>
        <form action="">
          <input type="text" name="" id="" placeholder='Avengers, Lords of Rings, The Matrix' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          <Movies movies={mappedMovies}/>
        }
      </main> 
    </div>
  )
}

export default App
