import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

const nunito = Inter({subsets: ['latin'], weight:"400"})

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'A irbnb clone using nextjs 14',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider/>
       <RegisterModal/>
       <LoginModal/>
        <Navbar currentUser={currentUser}/>
        {children}</body>
    </html>
  )
}
