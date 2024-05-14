import {WINNER_COMBOS} from '../constantes'

export const checkWinnerFrom = (boardChek) => {
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