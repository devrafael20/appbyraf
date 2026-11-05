import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    function update() {
      const marker = window.scrollY + 140
      let current = ids[0] ?? ''

      for (const id of ids) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) {
          current = id
        }
      }

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids])

  return active
}
