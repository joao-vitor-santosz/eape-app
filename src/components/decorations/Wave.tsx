import { cx } from '../../lib/cx'

/** Contornos das ondas que separam as seções, aproximados da referência (viewBox 1920 de largura). */
const wavePaths = {
  /** Base do hero: o azul sobe da esquerda para a direita, atrás da imagem circular. */
  heroBottom:
    'M0 400C420 372 760 340 960 250C1210 138 1480 48 1745 92C1830 106 1885 140 1920 168V420H0Z',
  /** Final de uma seção azul: a área branca “sobe” em curva suave. */
  sectionBottom:
    'M0 40C300 62 520 66 800 45C1050 25 1150 0 1310 2C1550 6 1750 30 1920 50V120H0Z',
  /** Topo do rodapé. */
  footerTop:
    'M0 58C250 32 450 6 700 4C950 2 1150 46 1360 46C1600 46 1800 30 1920 24V120H0Z',
} as const

interface WaveProps {
  variant: keyof typeof wavePaths
  className?: string
}

export function Wave({ variant, className }: WaveProps) {
  const height = variant === 'heroBottom' ? 420 : 120

  return (
    <svg
      viewBox={`0 0 1920 ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cx('block w-full', className)}
    >
      <path d={wavePaths[variant]} fill="currentColor" />
    </svg>
  )
}
