import { ChevronRight } from 'lucide-react'
import { Fragment } from 'react'
import { Link } from 'react-router'
import { cx } from '../../lib/cx'

export interface BreadcrumbItem {
  label: string
  /** Ausente no último item (página atual). */
  to?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

const linkClass = 'rounded-sm underline-offset-4 hover:text-navy hover:underline'

/** Caminho de navegação ("Você está aqui"). O último item é a página atual. */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Você está aqui" className={cx('text-sm text-ink', className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <Fragment key={item.label}>
            {index > 0 && (
              <li aria-hidden="true">
                <ChevronRight className="size-4" />
              </li>
            )}
            <li aria-current={item.to ? undefined : 'page'} className={cx(!item.to && 'font-medium text-navy')}>
              {item.to ? (
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  )
}
