import { cx } from '../../lib/cx'
import { StarDivider } from '../decorations/StarDivider'

interface SectionHeadingProps {
  id?: string
  title: string
  align?: 'center' | 'left'
  /** `light`: texto branco para fundos azul-marinho. */
  tone?: 'dark' | 'light'
  className?: string
}

/** Título de seção seguido do traço com estrela da marca. */
export function SectionHeading({
  id,
  title,
  align = 'center',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cx('flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}>
      <h2 id={id} className={cx('text-3xl/tight sm:text-4xl/tight', tone === 'light' && 'text-white')}>
        {title}
      </h2>
      <StarDivider />
    </div>
  )
}
