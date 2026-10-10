import type { AccentColor } from '../lib/accent'

/**
 * Conteúdo da página inicial.
 * Textos entre colchetes são MARCADORES TEMPORÁRIOS aguardando o conteúdo oficial da EAPE.
 */

/** Frase presente na logo oficial da EAPE. */
const tagline = 'Especializado em crianças e adolescentes com transtornos e dificuldades de aprendizagem.'

export const heroContent = {
  intro: tagline,
}

export const aboutContent = {
  text: '[Texto institucional sobre a EAPE — história, proposta e forma de atendimento — a confirmar]',
}

export interface AudienceItem {
  label: string
  /** Mesma cor do ícone correspondente na logo oficial. */
  accent: AccentColor
}

/** Público atendido, conforme a logo oficial da EAPE. */
export const audienceContent: { intro: string; items: AudienceItem[] } = {
  intro: tagline,
  items: [
    { label: 'TDAH', accent: 'orange' },
    { label: 'TEA', accent: 'teal' },
    { label: 'Síndrome de Down', accent: 'yellow' },
    { label: 'Paralisia cerebral', accent: 'green' },
    { label: 'Dislexia', accent: 'purple' },
    { label: 'Dificuldade de aprendizagem', accent: 'blue' },
  ],
}

export const specialtiesContent = {
  intro: '[Texto introdutório sobre as especialidades e serviços — a confirmar]',
}
