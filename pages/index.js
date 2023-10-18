import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Tab from "@/components/Tab"

const Home = () => {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('playfusion-user')) router.replace('/auth')
    }, [])

    return (<div className='h-full flex flex-col items-center'>
        <Head>
            <title>Play Fusion</title>
        </Head>
        <div className='h-[70vh] flex items-center'>
            <Tab
                className='mx-5'
                label={'Tic Tac Toe'}
                href={'/tic-tac-toe'}
                image={'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&h=1780&q=80'}
            />
            <Tab
                className='translate-y-20 mx-5'
                label={'Tetris'}
                href={'/tetris'}
                image={'https://images.unsplash.com/photo-1633537065962-eab1e07caec7?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071&h=2071'}
            />
            <Tab
                className='mx-5'
                label={'Snake'}
                href={'/snake'}
                image={'https://images.unsplash.com/photo-1528158222524-d4d912d2e208?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2040&h=2040'}
            />
        </div>
    </div>)
}

export default Home