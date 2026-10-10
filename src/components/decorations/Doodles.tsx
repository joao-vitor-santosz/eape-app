/*
 * Ilustrações decorativas desenhadas para o projeto, inspiradas nos
 * rabiscos infantis do tema Parezy (os arquivos originais do tema não são usados).
 * Todas são puramente decorativas (aria-hidden).
 */

interface DoodleProps {
  className?: string
}

function starPoints(cx: number, cy: number, outer: number, inner: number): string {
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? outer : inner
    const angle = (Math.PI / 5) * i - Math.PI / 2
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`
  }).join(' ')
}

export function SunDoodle({ className }: DoodleProps) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30)

  return (
    <svg viewBox="0 0 110 110" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <circle cx="55" cy="55" r="27" />
        {rays.map((angle) => (
          <line
            key={angle}
            x1="55"
            y1={angle % 60 === 0 ? 14 : 18}
            x2="55"
            y2={angle % 60 === 0 ? 4 : 10}
            transform={`rotate(${angle} 55 55)`}
          />
        ))}
        <path d="M44 62c5 7 17 7 22 0" />
      </g>
      <circle cx="47" cy="49" r="3" fill="currentColor" />
      <circle cx="63" cy="49" r="3" fill="currentColor" />
    </svg>
  )
}

export function StarsDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <polygon points={starPoints(40, 20, 17, 8)} transform="rotate(8 40 20)" />
        <polygon points={starPoints(16, 57, 12, 6)} transform="rotate(-12 16 57)" />
        <polygon points={starPoints(58, 60, 15, 7)} transform="rotate(18 58 60)" />
      </g>
    </svg>
  )
}

function Block({ x, y, rotate, label }: { x: number; y: number; rotate: number; label: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate} 20 20)`}>
      <path d="M6 0h34l-6 6H0z M40 0v34l-6 6V6" />
      <rect x="0" y="6" width="34" height="34" rx="3" />
      <text
        x="17"
        y="31"
        textAnchor="middle"
        fontSize="22"
        fontWeight="800"
        fill="currentColor"
        stroke="none"
        fontFamily="'Baloo 2 Variable', 'Baloo 2', sans-serif"
      >
        {label}
      </text>
    </g>
  )
}

export function BlocksDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 110 115" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <Block x={4} y={14} rotate={-10} label="1" />
        <Block x={54} y={2} rotate={6} label="2" />
        <Block x={36} y={62} rotate={-16} label="3" />
      </g>
    </svg>
  )
}

export function CloudShape({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 340 190" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <circle cx="70" cy="95" r="45" />
        <circle cx="140" cy="62" r="52" />
        <circle cx="215" cy="58" r="44" />
        <circle cx="270" cy="95" r="42" />
        <rect x="60" y="80" width="225" height="70" rx="35" />
        <circle cx="132" cy="120" r="42" />
        <circle cx="205" cy="118" r="40" />
        <circle cx="146" cy="172" r="8" />
        <circle cx="128" cy="184" r="5" />
      </g>
    </svg>
  )
}

/** Grade de "jogo da velha" usada como textura discreta nas seções azuis. */
export function TicTacToeDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 90 90" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M32 6v78M58 6v78M6 32h78M6 58h78" />
        <path d="M13 13l12 12M25 13L13 25M65 39l12 12M77 39L65 51" />
        <circle cx="45" cy="19" r="7" />
        <circle cx="19" cy="71" r="7" />
        <circle cx="71" cy="71" r="7" />
      </g>
    </svg>
  )
}
