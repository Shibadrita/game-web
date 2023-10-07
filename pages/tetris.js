import Head from "next/head"
import GameLayout from "@/components/ui/GameLayout"

const Tetris = () => {
    return (<>
        <Head>
            <title>Tetris</title>
        </Head>
        <GameLayout name={'Tetris'} instructions={''}>

        </GameLayout>
    </>)
}

export default Tetris