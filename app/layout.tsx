import type { Metadata } from 'next'
// @ts-expect-error Next.js handles global CSS imports without TypeScript declarations.
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio of a Data & Analytics Engineer',
  description: 'A portfolio design showcasing the work of a data & analytics engineer with a background in law and policy.',
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
