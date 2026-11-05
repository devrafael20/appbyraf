import { useEffect, useMemo, useState } from 'react'
import { hero } from '../content/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Token =
  | { kind: 'prompt'; text: string }
  | { kind: 'line'; text: string; indent?: boolean }

function buildTokens() {
  const tokens: Token[] = []
  hero.terminal.commands.forEach((command) => {
    tokens.push({ kind: 'prompt', text: `$ ${command.prompt}` })
    command.lines.forEach((line) => {
      tokens.push({ kind: 'line', text: line, indent: command.lines.length > 1 })
    })
  })
  return tokens
}

export function TerminalIntro() {
  const tokens = useMemo(() => buildTokens(), [])
  const reduced = usePrefersReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced || count >= tokens.length) return
    const delay = count === 0 ? 280 : tokens[count]?.kind === 'prompt' ? 420 : 160
    const timer = window.setTimeout(() => setCount((value) => value + 1), delay)
    return () => window.clearTimeout(timer)
  }, [count, reduced, tokens])

  const visible = tokens.slice(0, reduced ? tokens.length : count)
  const complete = reduced || count >= tokens.length

  return (
    <aside className="terminal" aria-label="Introduction terminal">
      <div className="term-bar">
        <span className="term-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <p className="term-title">{hero.terminal.title}</p>
      </div>
      <div className="term-body" data-complete={complete ? 'true' : 'false'}>
        {visible.map((token, index) =>
          token.kind === 'prompt' ? (
            <p key={`${token.text}-${index}`} className="term-prompt">
              {token.text}
            </p>
          ) : (
            <p key={`${token.text}-${index}`} className={token.indent ? 'term-indent' : 'term-line'}>
              {token.text}
            </p>
          ),
        )}
        <span className="term-cursor" aria-hidden="true" />
      </div>
    </aside>
  )
}
