import { useState, useEffect } from "react"

import Head from "next/head"
import MiniMax from "tic-tac-toe-minimax"
import GameLayout from "@/components/ui/GameLayout"
import TTTBoard from "@/components/tic-tac-toe/TTTBoard"
import Timer from "@/components/tic-tac-toe/Timer"

const { GameStep } = MiniMax
const symbols = { huPlayer: 'X', aiPlayer: 'O' }

const TicTacToe = () => {
    const [board, setBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])
    const [counter, setCounter] = useState(0)
    const [result, setResult] = useState()
    const [isTimerOn, setIsTimerOn] = useState(false)

    const stepHandler = index => {
        setBoard(board => {
            board[index] = 'X'
            return board
        })
        setCounter(counter => ++counter)
        setIsTimerOn(true)
    }

    useEffect(() => {
        if (!counter) return
        setTimeout(() => {
            const { winner, board: changed } = GameStep(board, symbols, 'Normal')
            setBoard(changed)
            if (winner) setResult(winner)
        }, 3000)
    }, [counter])

    const turnOffTimerHandler = () => setIsTimerOn(false)

    return (<>
        <Head>
            <title>Tic Tac Toe</title>
        </Head>
        <GameLayout name={'Tic Tac Toe'} instruction={'Tic-tac-toe, also known as noughts and crosses, is a classic two-player game that is typically played on a 3x3 grid. The objective of the game is to be the first player to form a line of three of their symbols (either X or O) horizontally, vertically, or diagonally.'}>
            <div className='flex items-center'>
                <TTTBoard board={board} handler={stepHandler} result={result} />
                {isTimerOn && <Timer duration={3} handler={turnOffTimerHandler} />}
            </div>
        </GameLayout>
    </>)
}

export default TicTacToe