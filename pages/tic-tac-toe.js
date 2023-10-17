import { useState, useEffect } from "react"
import { useGet } from "@/hooks/use-http"
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
    const [game, setGame] = useState({ name: '', instructions: '' })
    const { getRequest } = useGet()
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('playfusion-user')
            if (!token) return
            const { data } = await getRequest('/games/tic-tac-toe', token)
            const { game } = data
            console.log(data)
            setGame(game)
        })()
    }, [])
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
        <GameLayout name={game.name} instructions={game.instructions}>
            <div className='flex items-center'>
                <TTTBoard board={board} handler={stepHandler} result={result} />
                {isTimerOn && <Timer duration={3} handler={turnOffTimerHandler} />}
            </div>
        </GameLayout>
    </>)
}

export default TicTacToe