import { Hourglass } from 'lucide-react'
import type { MaybePending } from '../../content/about'
import { cx } from '../../lib/cx'

interface PendingNoteProps {
  /** O que deve entrar neste espaço quando a EAPE enviar o conteúdo. */
  description: string
  className?: string
}

/**
 * MARCADOR DE CONTEÚDO PENDENTE: indica um espaço que depende de texto da EAPE.
 * Deve ser substituído antes da publicação (ver ajustes.md).
 */
export function PendingNote({ description, className }: PendingNoteProps) {
  return (
    <div
      className={cx(
        'flex gap-4 rounded-2xl border-2 border-dashed border-orange/40 bg-white/70 p-5 text-left',
        className,
      )}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-soft text-orange-ink">
        <Hourglass className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="font-heading text-sm font-semibold text-navy">Aguardando conteúdo da EAPE</p>
        <p className="mt-1 text-sm/6 text-ink">{description}</p>
      </div>
    </div>
  )
}

interface ContentOrPendingProps {
  content: MaybePending
  className?: string
}

/** Exibe o texto quando já existe ou o aviso de conteúdo pendente. */
export function ContentOrPending({ content, className }: ContentOrPendingProps) {
  return 'text' in content ? (
    <p className={className}>{content.text}</p>
  ) : (
    <PendingNote description={content.pending} className={className} />
  )
}
