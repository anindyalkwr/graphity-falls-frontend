import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '@/components/elements/Navbar'
import Footer from '@/components/elements/Footer'
import { Lato } from '@next/font/google'
import Head from 'next/head'

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`flex flex-col min-h-screen ${lato.variable}`}>
            <Head>
                {/* Title for the browser tab */}
                <title>Graphity Falls</title>

                {/* Favicon for the browser tab */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navbar with a fixed position */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            {/* Main content with padding to account for navbar height */}
            <main className="flex-grow bg-gray-25">
                <Component {...pageProps} />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MyApp
