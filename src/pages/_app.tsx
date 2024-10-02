import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '@/components/elements/Navbar'
import Footer from '@/components/elements/Footer'
import { Lato } from '@next/font/google'

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`flex flex-col min-h-screen ${lato.variable}`}>
            <Navbar />
            <main className="flex-grow">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    )
}

export default MyApp
