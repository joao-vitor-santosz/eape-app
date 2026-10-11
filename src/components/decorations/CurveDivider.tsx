import type { AccentColor } from '../../lib/accent'
import { cx } from '../../lib/cx'

const WIDTH = 1440
const HEIGHT = 100
const STEP = 20
/** Distância entre a borda da curva e os traços coloridos acima dela. */
const STROKE_GAP = 16

/** Formas das curvas: altura (0–100, de cima para baixo) em função da posição horizontal (0–1). */
const shapes = {
  /** Ondulação suave, subindo da esquerda para a direita. */
  gentle: (t: number) => 60 - 34 * Math.sin(Math.PI * t * 1.2 - 0.3),
  /** Duas ondas de alturas diferentes. */
  wave: (t: number) => 56 + 26 * Math.sin(2 * Math.PI * t * 1.4 + 0.8) + 8 * Math.sin(2 * Math.PI * t * 3),
  /** Uma colina ampla. */
  hill: (t: number) => 88 - 64 * Math.sin(Math.PI * t) ** 1.5,
}

export type CurveShape = keyof typeof shapes

/** Trechos da curva (início e fim, de 0 a 1) que recebem os traços coloridos. */
const strokeSegments = [
  [0.06, 0.24],
  [0.31, 0.4],
  [0.68, 0.9],
] as const

const strokeClasses: Record<AccentColor, string> = {
  orange: 'stroke-orange',
  teal: 'stroke-teal',
  yellow: 'stroke-yellow',
  green: 'stroke-green',
  blue: 'stroke-blue',
  purple: 'stroke-purple',
  pink: 'stroke-pink',
}

function points(shape: CurveShape, from: number, to: number, offset = 0) {
  const result: string[] = []
  const start = Math.round(from * WIDTH)
  const end = Math.round(to * WIDTH)
  for (let x = start; x <= end; x += STEP) {
    result.push(`${x} ${(shapes[shape](x / WIDTH) - offset).toFixed(1)}`)
  }
  return result
}

function fillPath(shape: CurveShape) {
  return `M0 ${HEIGHT}L${points(shape, 0, 1).join('L')}L${WIDTH} ${HEIGHT}Z`
}

function strokePath(shape: CurveShape, from: number, to: number) {
  return `M${points(shape, from, to, STROKE_GAP).join('L')}`
}

interface CurveDividerProps {
  shape: CurveShape
  /** Cores dos três traços que acompanham a curva. */
  colors: [AccentColor, AccentColor, AccentColor]
  /** Espelha a curva horizontalmente, para variar entre seções. */
  flip?: boolean
  /** Deve incluir a cor de preenchimento (`text-*`), igual ao fundo da seção seguinte. */
  className?: string
}

/**
 * Transição curva entre seções: a área preenchida tem a cor da seção seguinte
 * e traços coloridos acompanham a curva, como os arcos da logo. Decorativo.
 */
export function CurveDivider({ shape, colors, flip = false, className }: CurveDividerProps) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cx('pointer-events-none block h-16 w-full sm:h-20 lg:h-28 xl:h-32', flip && '-scale-x-100', className)}
    >
      <path d={fillPath(shape)} fill="currentColor" />
      <g fill="none" strokeWidth="4" strokeLinecap="round">
        {strokeSegments.map(([from, to], index) => (
          <path
            key={from}
            d={strokePath(shape, from, to)}
            vectorEffect="non-scaling-stroke"
            className={strokeClasses[colors[index]]}
          />
        ))}
      </g>
    </svg>
  )
}
