import '../assets/globals.css'
import { Inter } from "@next/font/google";
import Head from "next/head";
import Script from "next/script";
import PageHeader from "../components/layout/header";
import PageFooter from "../components/layout/footer";

// Initialize `Inter` font
const inter = Inter({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={`${inter.variable} font-sans selection:bg-primary-light/60`}>
            <Head>
                <title>Terence Fan | Full Stack Developer</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="description" content="A Canada-based Full Stack Developer devoted to crafting pixel-perfect website and robust backend." />
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

            {/* Google tag (gtag.js) */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-XY6NJ3SE98"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', 'G-XY6NJ3SE98');
                `}
            </Script>
        </div>
    )
}