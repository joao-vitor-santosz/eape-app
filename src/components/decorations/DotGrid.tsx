import { cx } from '../../lib/cx'

interface DotGridProps {
  className?: string
}

const COLUMNS = 5
const ROWS = 4

/** Grupo de pontos, como os detalhes pontilhados da logo circular. Decorativo; a cor vem de `currentColor`. */
export function DotGrid({ className }: DotGridProps) {
  return (
    <svg
      viewBox={`0 0 ${COLUMNS * 10} ${ROWS * 10}`}
      aria-hidden="true"
      className={cx('pointer-events-none', className)}
    >
      {Array.from({ length: COLUMNS * ROWS }, (_, i) => (
        <circle key={i} cx={(i % COLUMNS) * 10 + 5} cy={Math.floor(i / COLUMNS) * 10 + 5} r="1.75" fill="currentColor" />
      ))}
    </svg>
  )
}
