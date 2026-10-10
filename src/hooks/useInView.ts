import { useEffect, useRef, useState } from 'react'

/**
 * Indica se o elemento já entrou na área visível da janela.
 * Dispara uma única vez (animações de entrada não se repetem).
 */
export function useInView<T extends Element>(rootMargin = '0px 0px -10% 0px') {
  const ref = useRef<T>(null)
  // Sem suporte a IntersectionObserver, o conteúdo é exibido de imediato.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold: 0.1 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin, inView])

  return [ref, inView] as const
}
