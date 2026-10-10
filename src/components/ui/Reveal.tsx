import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cx } from '../../lib/cx'

interface RevealProps {
  children: ReactNode
  /** Atraso em milissegundos, para escalonar elementos vizinhos. */
  delay?: number
  className?: string
}

/**
 * Entrada suave (opacidade + 8px de deslocamento) ao rolar até o bloco.
 * Usar com moderação e apenas abaixo da primeira dobra — nunca no hero.
 * Com `prefers-reduced-motion`, o conteúdo aparece imediatamente.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cx(
        'transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none',
        !inView && 'motion-safe:translate-y-2 motion-safe:opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
