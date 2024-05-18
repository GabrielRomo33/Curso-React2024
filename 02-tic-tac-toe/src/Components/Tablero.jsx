import { Square } from "./Square"

export const Tablero = ({Board, updateBoard}) => {
    return (
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
    )
}