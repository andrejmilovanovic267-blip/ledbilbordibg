'use client'

const FORM_SECTION_ID = 'upit-forma'
const DURATION_MS = 350
const HEADER_OFFSET = 80

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function smoothScrollTo(targetY: number, durationMs: number) {
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()

  function step(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / durationMs, 1)
    const eased = easeOutCubic(progress)
    window.scrollTo(0, startY + distance * eased)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export function ScrollToFormButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(FORM_SECTION_ID)
    if (el) {
      const rect = el.getBoundingClientRect()
      const targetY = rect.top + window.scrollY - HEADER_OFFSET
      smoothScrollTo(targetY, DURATION_MS)
    }
  }

  return (
    <a
      href={`#${FORM_SECTION_ID}`}
      onClick={handleClick}
      className="btn-primary inline-flex items-center justify-center focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
    >
      Pošaljite upit
    </a>
  )
}
