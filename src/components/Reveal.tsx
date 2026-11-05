import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => setVisible(true)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 15% 0px' },
    )

    observer.observe(node)

    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      show()
      observer.disconnect()
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal${visible ? ' is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
