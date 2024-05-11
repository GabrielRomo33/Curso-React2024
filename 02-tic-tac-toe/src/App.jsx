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
  return(
    <div className={className}>
        {children}
      </div>
    );
  }
  
  function App() {
  // const board = Array(9).fill(null);
  const [Board, setBoard] = useState(Array(9).fill(null));
  const [Turn, setTurn] = useState(TURNS.X);

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
