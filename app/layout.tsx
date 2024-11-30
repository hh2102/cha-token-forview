import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Suspense } from 'react'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChaToken Insight',
  description: 'Research articles and insights about blockchain and cryptocurrencies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <GoogleAnalytics />
          {children}
          <Script
          src="https://widgets.coingecko.com/gecko-coin-list-widget.js"
          strategy="afterInteractive"
        />
        </Suspense>
      </body>
    </html>
  )
}

