import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '../../lib/cx'

type ButtonVariant = 'primary' | 'accent'
type ButtonSize = 'md' | 'lg'

interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  /** Azul-marinho com texto branco. */
  primary: 'bg-navy text-white hover:bg-navy-soft',
  /** Laranja com texto azul-marinho (texto branco sobre laranja não atinge o contraste mínimo). */
  accent: 'bg-orange text-navy hover:bg-orange-bright',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'min-h-12 px-6 text-[15px]',
  lg: 'min-h-14 px-8 text-base',
}

/** Link com aparência de botão, em formato de pílula. */
export function ButtonLink({
  variant = 'primary',
  size = 'lg',
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-full font-heading font-medium',
        'transition-colors duration-200 motion-reduce:transition-none',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}
