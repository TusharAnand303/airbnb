import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'

const nunito = Nunito({subsets: ['latin'], weight:"400"})

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
        <Navbar/>
        {children}</body>
    </html>
  )
}
