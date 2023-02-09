import { Header, Footer } from '@/components'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>

        <div className='h-2 w-full bg-gradient-to-r from-[#D46A8E] via-[#634ccd] to-[#403079]'></div>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
