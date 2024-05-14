import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
};

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index);
  }
  return(
    <div onClick={handleClick}
    className={className}>
        {children}
      </div>
    );
  }
  
const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

  function App() {
  // const board = Array(9).fill(null);
  const [Board, setBoard] = useState(Array(9).fill(null));
  const [Turn, setTurn] = useState(TURNS.X);
  const [Winner, setWinner] = useState(null);

  const checkWinner = (boardChek) => {
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if (
        boardChek[a] &&
        boardChek[a] === boardChek[b] &&
        boardChek[b] === boardChek[c]
      ){
        return boardChek[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    console.log(Winner)
    if (Board[index] || Winner) return;//evia que se sobre escriba al hacer click en un cuadro que ya tenga un valor o si ya hay un ganador 
    //actualiza el tablero 
    const newBoard = [...Board];
    newBoard[index] = Turn;
    setBoard(newBoard);
    //cambia de turno
    const newTurn = Turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //checar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      setWinner(newWinner);
    }
  }

  return (
    <>
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          Board.map((_, index) => {
            return (
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}//se manda la funcion no la ejecucion de la funcion para que se ejecute dentro del Square para vitar que se ejecute cada que se renderice
              >{Board[index]}</Square>
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
    </main>
    </>
  )
}

export default App
