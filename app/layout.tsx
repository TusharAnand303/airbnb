import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'

const nunito = Inter({subsets: ['latin'], weight:"400"})

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'A irbnb clone using nextjs 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider/>
       <RegisterModal/>
        <Navbar/>
        {children}</body>
    </html>
  )
}
