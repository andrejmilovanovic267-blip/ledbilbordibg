import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blogPosts'
import { classicBillboards } from '@/lib/classicBillboardsData'
import { locationsData } from '@/lib/locationsData'
import { siteConfig } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/lokacije',
    ...locationsData.map((location) => `/lokacije/${location.slug}`),
    ...classicBillboards.map((billboard) => `/lokacije/${billboard.slug}`),
    '/cenovnik',
    '/kontakt',
    '/blog',
    ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
  ]

  return [...new Set(paths)].map((path) => ({
    url: new URL(path, siteConfig.siteUrl).toString(),
  }))
}
