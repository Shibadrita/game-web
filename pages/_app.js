import '@/styles/globals.css'
import Container from '@/components/ui/Container'
import Navbar from '@/components/Navbar'

const App = ({ Component, pageProps }) => {
    return (<>
        <Navbar />
        <Container>
            <Component {...pageProps} />
        </Container>
    </>)
}

export default App