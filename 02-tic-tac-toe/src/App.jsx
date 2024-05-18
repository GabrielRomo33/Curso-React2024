import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css';
import { Square } from './Components/Square';
import { TURNS } from './constantes';
import { checkWinnerFrom, checkEndWinner } from './logic/board'
import { WinnerModal } from './Components/WinnerModal';

  function App() {
  const [Board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('Board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });
  const [Turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('Turn');
    return turnFromStorage ?? TURNS.X
  });
  const [Winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('Board');
    window.localStorage.removeItem('Trun');
  }

  const updateBoard = (index) => {
    if (Board[index] || Winner) return;//evia que se sobre escriba al hacer click en un cuadro que ya tenga un valor o si ya hay un ganador 
    //actualiza el tablero 
    const newBoard = [...Board];
    newBoard[index] = Turn;
    setBoard(newBoard);//es asincrono
    //cambia de turno
    const newTurn = Turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Guardar Partida
    window.localStorage.setItem('Board', JSON.stringify(newBoard));
    window.localStorage.setItem('Turn', newTurn);
    //checar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);//se manda el newBoard por parametro para vitar errores de que aun tenga el estado anterior
    if(newWinner){
      confetti();
      setWinner(newWinner);
    } else if (checkEndWinner(newBoard)){
      setWinner(false);
    }
  }

  return (
    <>
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame} >Reiniciar Juego</button>
      <section className='game'>
        {
          Board.map((square, index) => {
            return (
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}//se manda la funcion no la ejecucion de la funcion para que se ejecute dentro del Square para vitar que se ejecute cada que se renderice
              >{square}</Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={Turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={Turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal Winner={Winner} resetGame={resetGame}/>
    </main>
    </>
  )
}

export default App
