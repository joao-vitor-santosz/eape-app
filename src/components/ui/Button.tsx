import type { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router'
import { cx } from '../../lib/cx'

type ButtonVariant = 'primary' | 'accent'
type ButtonSize = 'md' | 'lg'

interface ButtonStyleProps {
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

function buttonClasses({ variant = 'primary', size = 'lg' }: ButtonStyleProps, className?: string) {
  return cx(
    'inline-flex items-center justify-center gap-2 rounded-full font-heading font-medium',
    // Leve redução ao pressionar: confirma o clique de imediato.
    'transition-[background-color,scale] duration-150 ease-out-strong active:scale-97 motion-reduce:transition-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )
}

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & ButtonStyleProps & { href: string }

/**
 * Link com aparência de botão, em formato de pílula.
 * Endereços internos ("/…" ou "#…") usam o roteador, sem recarregar a página.
 */
export function ButtonLink({ href, variant, size, className, ...props }: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size }, className)

  if (href.startsWith('/') || href.startsWith('#')) {
    return <Link to={href} className={classes} {...props} />
  }

  return <a href={href} className={classes} {...props} />
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & ButtonStyleProps

/** Botão de ação (não navega), com a mesma aparência do `ButtonLink`. */
export function Button({ variant, size, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses({ variant, size }, className)} {...props} />
}
