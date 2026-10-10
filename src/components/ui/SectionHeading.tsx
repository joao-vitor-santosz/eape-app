import { cx } from '../../lib/cx'

interface SectionHeadingProps {
  id?: string
  eyebrow: string
  title: string
  align?: 'center' | 'left'
  /** `light`: texto branco para fundos azuis. */
  tone?: 'dark' | 'light'
  uppercaseEyebrow?: boolean
  className?: string
}

/** Subtítulo (Mulish 800, 14px) + título de seção (Baloo 2 800, 46px/56px), como no tema. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  align = 'center',
  tone = 'dark',
  uppercaseEyebrow = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cx(align === 'center' && 'text-center', className)}>
      <p
        className={cx(
          'mb-2.5 text-sm/5 font-extrabold tracking-[1px]',
          uppercaseEyebrow && 'uppercase',
          tone === 'light' ? 'text-white' : 'text-pink',
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cx(
          'text-[34px]/[42px] sm:text-[40px]/[50px] lg:text-[46px]/[56px]',
          tone === 'light' && 'text-white',
        )}
      >
        {title}
      </h2>
    </div>
  )
}
