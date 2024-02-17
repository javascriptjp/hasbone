import type { AppProps } from "next/app"
import { NextUIProvider } from "@nextui-org/react"

import "@/style/global.css"
import Head from "next/head"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return <>
        <NextUIProvider>
            <Head>
                <title>Hasbone</title>

                <meta property="og:title" content="Hasbone" />
                <meta property="og:description" content="Hasbone" />
            </Head>
            <Component {...pageProps} />
        </NextUIProvider>
    </>
}
