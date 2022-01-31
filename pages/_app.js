import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>edge-clone</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}