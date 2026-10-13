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

/**
 * Texto provisório de apresentação, sem dados factuais (história, números, credenciais).
 * Substituir ou validar com a EAPE antes da publicação.
 */
export const aboutContent = {
  paragraphs: [
    'A EAPE é um espaço dedicado ao desenvolvimento e à aprendizagem de crianças e adolescentes. Aqui, cada pessoa é recebida com escuta atenta, respeito ao seu ritmo e cuidado com a sua história.',
    'Reunimos diferentes especialidades em um só lugar para olhar cada criança e adolescente de forma integral, caminhando lado a lado com as famílias em cada etapa do atendimento.',
  ],
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

/** Texto provisório de introdução da equipe. Validar com a EAPE antes da publicação. */
export const specialtiesContent = {
  intro:
    'Nossa equipe reúne profissionais de diferentes áreas que atuam de forma integrada, unindo saúde, desenvolvimento e aprendizagem para oferecer um cuidado completo e acolhedor.',
}
