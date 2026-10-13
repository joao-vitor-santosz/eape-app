import { Star } from 'lucide-react'
import { audienceContent } from '../../content/home'
import { accentClasses } from '../../lib/accent'
import { cx } from '../../lib/cx'

/** Público atendido (condições citadas na logo oficial), cada um na cor do seu ícone na logo. */
export function AudienceChips({ className }: { className?: string }) {
  return (
    <ul className={cx('flex flex-wrap gap-3', className)}>
      {audienceContent.items.map(({ label, accent }) => (
        <li
          key={label}
          className={cx(
            'flex items-center gap-2 rounded-full px-4 py-2 font-heading text-[15px] font-medium text-navy',
            accentClasses[accent].soft,
          )}
        >
          <Star className={cx('size-4 fill-current', accentClasses[accent].text)} aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  )
}
