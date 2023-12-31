import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import { ThemeProvider } from './theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
 
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'World song',
  description: 'Musiques typiques à travers le monde',
}

export default function RootLayout(props: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body 
       className={
        cn(inter.className, "prose dark:prose-invert prose-a:no-underline max-w-none prose-li:list-none")
       }
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {props.children}
            {props.modal}
            <Footer/>
          </ThemeProvider>
      </body>
    </html>
  )
}
