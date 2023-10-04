import Head from "next/head"
import Tab from "@/components/Tab"

const Home = () => {
    return (<div className='h-full flex flex-col items-center'>
        <Head>
            <title>Play Fusion</title>
        </Head>
        <div className='w-5/6 flex justify-around'>
            <Tab label={'Tic Tac Toe'} href={'/tic-tac-toe'} className='translate-y-14' />
            <Tab label={'Tetris'} href={'/tetris'} className='translate-y-14' />
        </div>
        <Tab label={'Quiz Game'} href={'/quiz-game'} />
        <div className='w-5/6 flex justify-around'>
            <Tab label={'Stone Paper Scissor'} href={'/stone-paper-scissor'} className='-translate-y-14' />
            <Tab label={'Snake'} href={'/snake'} className='-translate-y-14' />
        </div>
    </div>)
}

export default Home