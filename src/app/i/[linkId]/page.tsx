
import { Metadata, ResolvingMetadata } from 'next'
import articles from '@/assets/articles'
import { Redirect } from '@/components/redirect'
type Props = {
  params: { linkId: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const linkId = params.linkId


  const article = require(`@/assets/articles/intro/${linkId}.json`)
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: article.article?.title,
    openGraph: {
      title: article.article?.title,
      description: article.article?.description,
      images: [article.article?.smallerImage ?? "", ...previousImages],
      locale: 'en_US',
    },
    description: article.article?.description,
    category: article.article?.labels[0],
    generator: 'Etlog',
    applicationName: 'Etlog',
    referrer: 'origin-when-cross-origin',
    keywords: article.article?.keywords,
    colorScheme: 'dark',
    publisher: 'Etlog',
    twitter: {
      card: "summary_large_image",
      title: article.article?.title,
      description: article.article?.description,
      creator: "@etlogresearch",
      images: article.article?.smallerImage,
    }
  }
}

export default function Article({ params }: { params: { linkId: string } }) {

  const article = require(`@/assets/articles/intro/${params.linkId}.json`)

  return (
    <main className="bg-base-100 base-content flex flex-col items-center justify-between overflow-x-hidden text-cyan-500">
      <Redirect article={article} />
    </main>
  )
}


export async function generateStaticParams() {
  return articles.map((article) => ({
    linkId: article.linkId,
  }))
}