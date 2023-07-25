import LoadingSVG from '@/assets/icons/loading'
import { Loading } from '@/components/loading'
import Image from 'next/image'

export default async function Home() {
  // const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LoadingSVG />
    </main>
  )
}

async function getData() {
  const res = await fetch('https://etlog.co')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log(res)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return {}
}
