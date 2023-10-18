import { Provider } from "react-redux"

import Head from "next/head"
import GameLayout from "@/components/ui/GameLayout"
import SnakeBoard from "@/components/snake/SnakeBoard"
import ScoreCard from "@/components/snake/ScoreCard"
import store from "@/components/snake/store"

const Snake = () => {
    return (<>
        <Head>
            <title>Snake</title>
        </Head>
        <GameLayout name={'Snake'} instructions={''}>
            <Provider store={store}>
                <div className='flex flex-col items-center'>
                    <ScoreCard />
                    <SnakeBoard height={360} width={600} />
                </div>
            </Provider>
        </GameLayout>
    </>)
}

export default Snake