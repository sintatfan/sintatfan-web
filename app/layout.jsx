import './globals.css'
import PageHeader from "../components/layout/header";
import PageFooter from "../components/layout/footer";
import { Inter } from '@next/font/google'

// Initialize `Inter` font
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  )
}
