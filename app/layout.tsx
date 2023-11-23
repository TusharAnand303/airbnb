import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import RentModal from './components/modals/RentModal'
import LoginModal from './components/modals/LoginModal'
import ToasterProvider from './providers/ToasterProvider'
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
       <RentModal/>
        <Navbar currentUser={currentUser}/>
        <div className='pb-20 pt-28'>
        {children}
        </div>
        </body>
    </html>
  )
}
