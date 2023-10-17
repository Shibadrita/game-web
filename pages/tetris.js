import { useState, useEffect } from "react"
import { useGet } from "@/hooks/use-http"
import Head from "next/head"
import GameLayout from "@/components/ui/GameLayout"
import TetrisBoard from "@/components/tetris/TetrisBoard"

const Tetris = () => {
    const [game, setGame] = useState({ name: '', instructions: '' })
    const { getRequest } = useGet()
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('playfusion-user')
            if (!token) return
            const { data } = await getRequest('/games/tetris', token)
            const { game } = data
            console.log(data)
            setGame(game)
        })()
    }, [])
    return (<>
        <Head>
            <title>Tetris</title>
        </Head>
        <GameLayout name={game.name} instructions={game.instructions}>
            <TetrisBoard />
        </GameLayout>
    </>)
}

export default Tetris