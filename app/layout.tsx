import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather app with chat gpt-3.5 by iw4sz',
  description: 'Weather app created using Next.js 13.3, React, Tremor 2.0, StepZen, GraphQl adn Prettier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
