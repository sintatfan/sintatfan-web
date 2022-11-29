import '../assets/globals.css'
import { Inter } from "@next/font/google";
import Head from "next/head";
import PageHeader from "../components/layout/header";
import PageFooter from "../components/layout/footer";

// Initialize `Inter` font
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={`${inter.variable} font-sans`}>
            <Head>
                <title>Sin-Tat&apos;s Personal Website | Full Stack Developer</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="description" content="This is Sin-Tat&apos;s personal website, which introduces his vision and showcases his recent projects." />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#f29516" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#F7F7F7" />
            </Head>

            <PageHeader />
            <Component {...pageProps} />
            <PageFooter />
        </div>
    )
}