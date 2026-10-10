import { cx } from '../../lib/cx'

interface StarDividerProps {
  className?: string
}

/** Traço com estrela central, retirado do detalhe sob o nome da clínica na logo oficial. */
export function StarDivider({ className }: StarDividerProps) {
  return (
    <svg viewBox="0 0 96 14" fill="none" aria-hidden="true" className={cx('h-3.5 w-24', className)}>
      <g strokeWidth="3" strokeLinecap="round">
        <path d="M3 7h10" className="stroke-teal" />
        <path d="M19 7h10" className="stroke-yellow" />
        <path d="M35 7h3" className="stroke-pink" />
        <path d="M58 7h3" className="stroke-green" />
        <path d="M67 7h10" className="stroke-purple" />
        <path d="M83 7h10" className="stroke-blue" />
      </g>
      <path
        d="M48 1.5l1.62 3.6 3.93.42-2.94 2.65.82 3.86L48 10.06l-3.43 1.97.82-3.86-2.94-2.65 3.93-.42z"
        className="fill-orange"
      />
    </svg>
  )
}
