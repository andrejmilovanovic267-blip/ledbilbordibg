import { ReadingProgressBar } from '@/components/ReadingProgressBar'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="sticky top-16 z-40">
        <ReadingProgressBar />
      </div>
      <div className="bg-white min-h-screen">
        {children}
      </div>
    </>
  )
}
