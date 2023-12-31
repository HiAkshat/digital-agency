import './globals.css'
// import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import { ThemeProvider } from "@/context/ThemeContext";


// const inter = Inter({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin']
// })

export const metadata = {
  title: 'AkGency',
  description: 'A NextJS project from @HiAkshat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className='body-container gap-6'>
            {/* <div className='flex flex-col'> */}
            {/* </div> */}
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
