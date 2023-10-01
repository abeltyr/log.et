import { Redirect } from '@/components/redirect'

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

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Redirect url={`https://etlog.co`} />
    </main>
  )
}
