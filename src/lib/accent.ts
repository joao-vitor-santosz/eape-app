/** Cores de destaque do tema, usadas de forma alternada em cartões e ícones. */
export type AccentColor = 'pink' | 'cyan' | 'yellow' | 'primary'

interface AccentClasses {
  solid: string
  soft: string
  text: string
}

// Classes completas e estáticas para que o Tailwind consiga detectá-las.
export const accentClasses: Record<AccentColor, AccentClasses> = {
  pink: { solid: 'bg-pink', soft: 'bg-pink/15', text: 'text-pink' },
  cyan: { solid: 'bg-cyan', soft: 'bg-cyan/15', text: 'text-cyan' },
  yellow: { solid: 'bg-yellow', soft: 'bg-yellow/25', text: 'text-yellow-dark' },
  primary: { solid: 'bg-primary', soft: 'bg-primary/15', text: 'text-primary' },
}
