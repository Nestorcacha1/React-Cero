import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './componets/Square'
import { TURNS } from './constans'
import { chekcWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './componets/Winner'
import { saveGameToStorage, resetGameStorage } from './logic/strorage'

function App () {
  const [board, setBoard] = useState(() => {
    const savedBorad = window.localStorage.getItem('board')
    return savedBorad ? JSON.parse(savedBorad) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    return savedTurn ?? TURNS.x
  })

  // Null is hay un ganador, false si hay un empate y true si hay un ganador
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) => {
    // si el cuadrado ya esta ocupado, no hacer nada
    if (board[index] || winner) return
    // Actualizar el tablero hacing una copia del mismo
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // Guardar cambios

    // revisar si hay un ganador
    const newWinner = chekcWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  useEffect(() => { })
  return (
    <main className='board'>
      <h1>Tic Tac To</h1>
      <button onClick={resetGame}>Riniciar el Juego</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
