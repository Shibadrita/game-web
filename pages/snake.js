import { useState, useEffect } from "react"
import { useGet } from "@/hooks/use-http"

import Head from "next/head"
import GameLayout from "@/components/ui/GameLayout"
import SnakeBoard from "@/components/snake/SnakeBoard"

const Snake = () => {
    const [game, setGame] = useState({ name: '', instructions: '' })
    const { getRequest } = useGet()
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('playfusion-user')
            if (!token) return
            const { data } = await getRequest('/games/snake', token)
            const { game } = data
            console.log(data)
            setGame(game)
        })()
    }, [])
    return (<>
        <Head>
            <title>Snake</title>
        </Head>
        <GameLayout name={game.name} instructions={game.instructions}>
            <SnakeBoard />
        </GameLayout>
    </>)
}

export default Snake