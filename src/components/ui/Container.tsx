import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '../../lib/cx'

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  /** `site`: 1140px de conteúdo (seções). `wide`: 1520px (cabeçalho e hero). */
  size?: 'site' | 'wide'
}

export function Container({ size = 'site', className, ...props }: ContainerProps) {
  return (
    <div
      className={cx(
        'mx-auto w-full px-4 sm:px-6',
        size === 'site'
          ? 'max-w-[calc(var(--container-site)+3rem)]'
          : 'max-w-[calc(var(--container-wide)+3rem)]',
        className,
      )}
      {...props}
    />
  )
}
