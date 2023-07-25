import { Redirect } from '@/components/redirect'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Redirect url={`https://etlog.co`} />
    </main>
  )
}
