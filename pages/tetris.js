import Head from "next/head"
import GameLayout from "@/components/ui/GameLayout"
import TetrisBoard from "@/components/tetris/TetrisBoard"

const Tetris = () => {
    return (<>
        <Head>
            <title>Tetris</title>
        </Head>
        <GameLayout name={'Tetris'} instructions={''}>
            <TetrisBoard />
        </GameLayout>
    </>)
}

export default Tetris