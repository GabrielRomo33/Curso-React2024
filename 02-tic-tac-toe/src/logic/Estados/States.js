
export const BoardState = () => {
    const boardFromStorage = window.localStorage.getItem('Board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(42).fill(null);
}

export const TurnState = () => {
    const turnFromStorage = window.localStorage.getItem('Turn');
    return turnFromStorage ?? TURNS.X//el doble ? es para identificar si la variable viene nula o indefinida
}