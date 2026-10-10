import { Link } from 'react-router'
import logoImage from '../../assets/images/logo-2-sm.jpeg'
import { siteInfo } from '../../content/site'
import { cx } from '../../lib/cx'

interface LogoProps {
  className?: string
  onClick?: () => void
}

/**
 * Logo oficial (versão circular com lápis) + nome da clínica em texto,
 * que continua legível mesmo com a logo em tamanho reduzido.
 */
export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${siteInfo.shortName} — ${siteInfo.fullName}, página inicial`}
      className={cx('flex items-center gap-3 rounded-md', className)}
    >
      <img
        src={logoImage}
        alt=""
        width={160}
        height={160}
        className="size-13 shrink-0 clip-circle lg:size-14"
      />
      <span className="font-heading text-[13px]/4 font-medium sm:text-sm/4.5">
        <span className="block text-navy">Espaço de Atendimento</span>
        <span className="block text-orange-ink">Pedagógico Especializado</span>
      </span>
    </Link>
  )
}
