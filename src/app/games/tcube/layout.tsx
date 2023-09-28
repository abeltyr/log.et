import '../../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Qews gaming',
  description: `Stepping into the mobile gaming arena, fueled by creativity and ambition. Join us as we pave the way for fresh and enthralling gaming experiences. Discover the future of gaming!`,
  generator: 'Qews',
  applicationName: 'Qews',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  publisher: 'Qews',
  openGraph: {
    title: 'Qews gaming',
    description: `Stepping into the mobile gaming arena, fueled by creativity and ambition. Join us as we pave the way for fresh and enthralling gaming experiences. Discover the future of gaming!`,
    images: "https://etlog.s3.amazonaws.com/etlogLogo.png",
    locale: 'en_US',
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
