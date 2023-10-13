import '@/styles/globals.css'
import Container from '@/components/ui/Container'
import Navbar from '@/components/Navbar'

import { usePathname } from 'next/navigation'

const App = ({ Component, pageProps }) => {
    const path = usePathname()
    return (<>
        {path != '/auth' && <Navbar />}
        <Container>
            <Component {...pageProps} />
        </Container>
    </>)
}

export default App