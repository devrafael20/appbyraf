import type { ReactNode } from 'react'
import { IconArrow } from './Icons'

type CtaProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'ghost' | 'accent'
  className?: string
  arrow?: boolean
}

export function Cta({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'ghost',
  className = '',
  arrow = false,
}: CtaProps) {
  const classes = ['cta', variant === 'primary' ? 'cta-primary' : '', variant === 'accent' ? 'cta-accent' : '', className]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span className="cta-arrow">
          <IconArrow />
        </span>
      ) : null}
    </>
  )

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : undefined)}
      >
        {inner}
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {inner}
    </button>
  )
}
