import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '../../lib/cx'

export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cx('mx-auto w-full max-w-site px-5 sm:px-8', className)} {...props} />
}
