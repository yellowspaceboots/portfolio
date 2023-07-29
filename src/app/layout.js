import './globals.css'
import { Bungee, Bungee_Shade, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const bungee = Bungee({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bungee'
})

const bungeeShade = Bungee_Shade({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bungee-shade'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Rachel Busch | Portfolio',
  description: 'Welcome to my portfolio!'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className={`${bungee.variable} ${bungeeShade.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
