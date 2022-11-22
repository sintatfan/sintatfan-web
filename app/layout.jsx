import './globals.css'
import PageHeader from "../components/layout/header";
import PageFooter from "../components/layout/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
