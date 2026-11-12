import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

interface PageMetadataInput {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString()
  const imageUrl = image ? new URL(image, siteConfig.siteUrl).toString() : undefined

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'sr_RS',
      type,
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  }
}
