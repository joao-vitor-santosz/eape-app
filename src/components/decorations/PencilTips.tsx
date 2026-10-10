import { useId } from 'react'
import { cx } from '../../lib/cx'

/** Cores dos lápis das logos oficiais, na ordem em que se repetem. */
const pencils = [
  { fill: 'fill-red', offset: 6 },
  { fill: 'fill-orange', offset: 0 },
  { fill: 'fill-yellow', offset: 9 },
  { fill: 'fill-green', offset: 3 },
  { fill: 'fill-teal', offset: 7 },
  { fill: 'fill-blue', offset: 1 },
  { fill: 'fill-purple', offset: 10 },
  { fill: 'fill-pink', offset: 4 },
] as const

const PENCIL_WIDTH = 26
const SLOT_WIDTH = 30
const HEIGHT = 56
/** Altura do cone de madeira; a ponta colorida ocupa o terço superior. */
const CONE_HEIGHT = 22

interface PencilTipsProps {
  className?: string
}

/**
 * Fileira de pontas de lápis coloridos subindo da borda inferior,
 * como na base da logo oficial. Repete-se em qualquer largura. Decorativo.
 */
export function PencilTips({ className }: PencilTipsProps) {
  const patternId = useId()

  return (
    <svg aria-hidden="true" className={cx('pointer-events-none block h-14 w-full', className)}>
      <defs>
        <pattern id={patternId} patternUnits="userSpaceOnUse" width={pencils.length * SLOT_WIDTH} height={HEIGHT}>
          {pencils.map(({ fill, offset }, index) => {
            const x = index * SLOT_WIDTH + (SLOT_WIDTH - PENCIL_WIDTH) / 2
            const center = x + PENCIL_WIDTH / 2
            const apex = offset + 2
            const base = apex + CONE_HEIGHT
            const leadY = apex + CONE_HEIGHT / 3
            const leadHalf = PENCIL_WIDTH / 6

            return (
              <g key={fill}>
                <rect x={x} y={base} width={PENCIL_WIDTH} height={HEIGHT - base} className={fill} />
                <rect x={x} y={base} width={8} height={HEIGHT - base} fill="white" fillOpacity="0.22" />
                <polygon points={`${x},${base} ${x + PENCIL_WIDTH},${base} ${center},${apex}`} fill="#f3d6ab" />
                <polygon
                  points={`${center - leadHalf},${leadY} ${center + leadHalf},${leadY} ${center},${apex}`}
                  className={fill}
                />
              </g>
            )
          })}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
