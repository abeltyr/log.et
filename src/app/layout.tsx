import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Etlog research and analysis',
  description: `We dissect extensive studies into entertaining, concise reports. Our mission is to make complex research accessible, enjoyable, and reader-friendly.`,
  generator: 'Etlog',
  applicationName: 'Etlog',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  publisher: 'Etlog',
  openGraph: {
    title: 'Etlog research and analysis',
    description: `We dissect extensive studies into entertaining, concise reports. Our mission is to make complex research accessible, enjoyable, and reader-friendly.`,
    images: "https://etlog.s3.amazonaws.com/etlogLogo.png",
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: 'Etlog research and analysis',
    description: `We dissect extensive studies into entertaining, concise reports. Our mission is to make complex research accessible, enjoyable, and reader-friendly.`,
    creator: "@etlogresearch",
    images: "https://etlog.s3.amazonaws.com/etlogLogo.png"
  },
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
