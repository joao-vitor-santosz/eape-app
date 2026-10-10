/** Cores de destaque da marca (cores dos lápis das logos), usadas em ícones, cartões e detalhes. */
export type AccentColor = 'orange' | 'teal' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink'

interface AccentClasses {
  /** Cor viva, para detalhes e elementos decorativos. */
  solid: string
  /** Fundo claro (tom suave da cor). */
  soft: string
  /** Cor de ícone/texto com contraste adequado sobre fundo claro. */
  text: string
  /** Cor viva para ícones sobre fundo azul-marinho. */
  onDark: string
}

// Classes completas e estáticas para que o Tailwind consiga detectá-las.
export const accentClasses: Record<AccentColor, AccentClasses> = {
  orange: { solid: 'bg-orange', soft: 'bg-orange-soft', text: 'text-orange-ink', onDark: 'text-orange' },
  teal: { solid: 'bg-teal', soft: 'bg-teal-soft', text: 'text-teal-ink', onDark: 'text-teal' },
  yellow: { solid: 'bg-yellow', soft: 'bg-yellow-soft', text: 'text-yellow-ink', onDark: 'text-yellow' },
  green: { solid: 'bg-green', soft: 'bg-green-soft', text: 'text-green-ink', onDark: 'text-green' },
  blue: { solid: 'bg-blue', soft: 'bg-blue-soft', text: 'text-blue-ink', onDark: 'text-blue-light' },
  purple: { solid: 'bg-purple', soft: 'bg-purple-soft', text: 'text-purple-ink', onDark: 'text-purple-light' },
  pink: { solid: 'bg-pink', soft: 'bg-pink-soft', text: 'text-pink-ink', onDark: 'text-pink' },
}
