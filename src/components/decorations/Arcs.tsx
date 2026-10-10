import { cx } from '../../lib/cx'

interface ArcSegment {
  radius: number
  from: number
  to: number
  className: string
}

/** Ângulos em graus, no sentido horário a partir do topo. */
const segments: ArcSegment[] = [
  { radius: 46, from: 15, to: 70, className: 'text-teal' },
  { radius: 46, from: 85, to: 120, className: 'text-pink' },
  { radius: 46, from: 135, to: 160, className: 'text-yellow' },
  { radius: 46, from: 200, to: 275, className: 'text-purple' },
  { radius: 46, from: 290, to: 345, className: 'text-orange' },
  { radius: 38, from: 150, to: 215, className: 'text-green' },
  { radius: 38, from: 330, to: 30, className: 'text-blue' },
]

function point(radius: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180
  return `${(50 + radius * Math.cos(rad)).toFixed(2)} ${(50 + radius * Math.sin(rad)).toFixed(2)}`
}

function arcPath({ radius, from, to }: ArcSegment) {
  const largeArc = to - from > 180 ? 1 : 0
  return `M${point(radius, from)}A${radius} ${radius} 0 ${largeArc} 1 ${point(radius, to)}`
}

interface ArcsProps {
  className?: string
}

/** Segmentos de arco concêntricos, inspirados na borda da logo circular da EAPE. Decorativo. */
export function Arcs({ className }: ArcsProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={cx('pointer-events-none', className)}>
      {segments.map((segment) => (
        <path
          key={`${segment.radius}-${segment.from}`}
          d={arcPath(segment)}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className={segment.className}
        />
      ))}
    </svg>
  )
}
