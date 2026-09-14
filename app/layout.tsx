import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio Organic',
  description: 'An organic and natural portfolio design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-organic-cream text-organic-charcoal">
        {children}
      </body>
    </html>
  )
}
