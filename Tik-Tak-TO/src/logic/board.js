import { WINNER_COMBOS } from "../constans"

export const chekcWinner = (boardtoCheck) => {
    // revisar si hay un ganador ya sea Y o X
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardtoCheck[a] &&
        boardtoCheck[a] === boardtoCheck[b] &&
        boardtoCheck[a] === boardtoCheck[c]
      ) {
        // hay un ganador
        return boardtoCheck[a]
      }
    }
    // has pertido
    return null
  }
 export const checkEndGame  = (newBoard) => {
    
    return newBoard.every((square)=> square !== null)
  }