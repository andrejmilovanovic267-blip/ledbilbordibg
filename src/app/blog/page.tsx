import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blogPosts'

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Blog</h1>
      <p className="text-gray-600 leading-relaxed mb-12">
        Korisne informacije o LED oglašavanju, cenovnicima i iznajmljivanju bilborda u Beogradu.
      </p>
      <div className="space-y-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-0">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
