import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '../../lib/cx'

type ButtonVariant = 'pink' | 'cyan' | 'primary'
type ButtonSize = 'md' | 'lg'

interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  pink: 'bg-pink',
  cyan: 'bg-cyan',
  primary: 'bg-primary',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'h-[50px] px-[30px] text-base tracking-[0.5px]',
  lg: 'h-[58px] px-10 text-lg',
}

/** Botão do tema: cantos de 6px e sombra interna inferior que simula relevo. */
export function ButtonLink({
  variant = 'cyan',
  size = 'lg',
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cx(
        'inline-flex items-center justify-center rounded-md font-heading font-bold text-white shadow-pressed',
        'transition-[translate,filter] duration-250 ease-in-out hover:-translate-y-0.5 hover:brightness-105',
        'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}
