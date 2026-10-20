import type { ReactNode } from 'react'

type Arrow = 'ne' | 'se'

type CtaProps = {
  children: ReactNode
  href?: string
  arrow?: Arrow
  disabled?: boolean
  className?: string
}

const arrows: Record<Arrow, string> = {
  ne: '↗',
  se: '↘',
}

export function Cta({
  children,
  href,
  arrow,
  disabled = false,
  className = '',
}: CtaProps) {
  const classes = ['cta', className, disabled ? 'is-disabled' : '']
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span className={`cta-arrow cta-arrow--${arrow}`} aria-hidden="true">
          {arrows[arrow]}
        </span>
      ) : null}
    </>
  )

  if (disabled || !href) {
    return (
      <span className={classes} role={disabled ? 'link' : undefined} aria-disabled={disabled || undefined}>
        {inner}
      </span>
    )
  }

  const external = href.startsWith('http')

  return (
    <a
      className={classes}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : undefined)}
    >
      {inner}
    </a>
  )
}
