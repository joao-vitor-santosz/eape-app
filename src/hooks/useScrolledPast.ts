import { useEffect, useState } from 'react'

/** Retorna `true` quando a página foi rolada além de `offset` pixels. */
export function useScrolledPast(offset: number): boolean {
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const update = () => setScrolledPast(window.scrollY > offset)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [offset])

  return scrolledPast
}
