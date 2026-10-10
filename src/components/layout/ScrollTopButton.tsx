import { ArrowUp } from 'lucide-react'
import { useScrolledPast } from '../../hooks/useScrolledPast'
import { cx } from '../../lib/cx'

export function ScrollTopButton() {
  const visible = useScrolledPast(600)

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={() => window.scrollTo({ top: 0 })}
      className={cx(
        'fixed right-5 bottom-5 z-40 flex size-12 items-center justify-center rounded-full bg-orange text-navy shadow-soft sm:right-8 sm:bottom-8',
        'transition-[opacity,translate,background-color] duration-200 ease-out hover:bg-orange-bright motion-reduce:transition-none',
        visible ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  )
}
