import {WINNER_COMBOS} from '../constantes'

export const checkWinnerFrom = (boardChek) => {
    for(const combo of WINNER_COMBOS){
      const [a,b,c,d] = combo
      if (
        boardChek[a] &&
        boardChek[a] === boardChek[b] &&
        boardChek[b] === boardChek[c] 
        &&
        boardChek[c] === boardChek[d]
      ){
        return boardChek[a]
      }
    }
    return null
  }

  export const checkEndWinner = (newBoard) => {
    return newBoard.every((Square) => Square !== null);
  }