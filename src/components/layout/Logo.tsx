import { Link } from 'react-router'
import { siteInfo } from '../../content/site'
import { cx } from '../../lib/cx'

interface LogoProps {
  className?: string
  onClick?: () => void
}

/**
 * MARCADOR TEMPORÁRIO: o logotipo oficial da EAPE ainda não foi fornecido.
 * Substituir por <img> com o arquivo oficial quando disponível.
 */
export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${siteInfo.shortName} — ${siteInfo.fullName}, página inicial`}
      className={cx(
        'font-heading text-[40px] leading-none font-extrabold tracking-wide text-navy',
        className,
      )}
    >
      {siteInfo.shortName}
    </Link>
  )
}
