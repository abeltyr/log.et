
import { Metadata, ResolvingMetadata } from 'next'
import articles from '@/assets/links'
import jsdom from "jsdom";
import { ColorSchemeEnum } from 'next/dist/lib/metadata/types/metadata-types';
import { Redirect } from '@/components/redirect';
type Props = {
  params: { linkId: string }
}

type MetadataType = {
  title?: string,
  description?: string,
  'application-name'?: string,
  generator?: string,
  keywords?: string[],
  referrer?: string,
  'color-scheme'?: ColorSchemeEnum,
  viewport?: string,
  publisher?: string,
  category?: string,
  'og:title'?: string,
  'og:description'?: string,
  'og:locale'?: string,
  'og:image'?: string,
  'twitter:card'?: '"summary_large_image" | "summary" | "player" | "app" | undefined',
  'twitter:creator'?: string,
  'twitter:title'?: string,
  'twitter:description'?: string,
  'twitter:image'?: string
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || []

  const data: MetadataType = await getData({ linkId: params.linkId });
  return {
    title: data.title,
    openGraph: {
      title: data['og:title'],
      description: data['og:description'],
      images: [data['og:image'] ?? "", ...previousImages],
      locale: data['og:locale'],
    },
    description: data.description,
    category: data.category,
    generator: data.generator,
    applicationName: data['application-name'],
    referrer: 'origin-when-cross-origin',
    keywords: data.keywords,
    colorScheme: data['color-scheme'] ?? "dark",
    publisher: data.publisher,
    twitter: {
      card: "summary_large_image",
      title: data['twitter:title'],
      description: data['twitter:description'],
      creator: data['twitter:creator'],
      images: data['twitter:image'],
    }
  }
}

export default async function Article({ params }: { params: { linkId: string } }) {

  const article = require(`@/assets/links/${params.linkId}.json`)

  return (
    <main className="bg-base-100 base-content flex flex-col items-center justify-between overflow-x-hidden ">
      <Redirect url={article.url} />
    </main>
  )
}


export async function generateStaticParams() {
  return articles.map((article) => ({
    linkId: article.linkId,
  }))
}

async function getData({ linkId }: { linkId: string }) {
  const article = require(`@/assets/links/${linkId}.json`)
  console.log(article);
  // const res = await fetch(article.url)
  const html = await (await fetch(article.url, {
    headers: {
      'User-Agent': 'request'
    }

  })).text()
  const metaData: MetadataType = extractMetaData(html);
  return metaData
}

function extractMetaData(htmlText: string) {
  const dom = new jsdom.JSDOM(htmlText)
  const metaData: any = {};

  // Extract <title> tag content
  const titleElement = dom.window.document.querySelector('title');
  if (titleElement) {
    metaData.title = titleElement.textContent;
  }

  // Extract <meta> tags (e.g., description, keywords, etc.)
  const metaElements = dom.window.document.querySelectorAll('meta');
  metaElements.forEach(metaElement => {
    const name = metaElement.getAttribute('name');
    const property = metaElement.getAttribute('property');
    const content = metaElement.getAttribute('content');

    if (name && content) {
      metaData[name] = content;
    } else if (property && content) {
      metaData[property] = content;
    }
  });

  if (metaData.keywords) metaData.keywords = metaData.keywords.split(",")
  return metaData;
}