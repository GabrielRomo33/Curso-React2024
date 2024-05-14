import { Square } from "./Square"

export function WinnerModal ({Winner, resetGame}) {
    if (Winner === null) return null

    const winnerText = Winner === false ? 'Empate' : 'Gano: '
    return(

      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>
          <header className='win'>
            {Winner && <Square>{Winner}</Square>}
          </header>
    
          <footer>
            <button onClick={resetGame}>Empezar de Nuevo</button>
          </footer>
        </div>
      </section>
    )
}