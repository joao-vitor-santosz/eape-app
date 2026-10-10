import { ChevronUp } from 'lucide-react'
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
        'fixed right-0 bottom-8 z-40 flex size-11 items-center justify-center rounded-l-md bg-pink text-white shadow-pressed',
        'transition-[opacity,translate] duration-300 ease-in-out motion-reduce:transition-none',
        visible ? 'opacity-100' : 'pointer-events-none translate-x-full opacity-0',
      )}
    >
      <ChevronUp className="size-5" aria-hidden="true" />
    </button>
  )
}
