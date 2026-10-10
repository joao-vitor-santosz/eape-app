import { HeartPulse, Lightbulb, Sprout, type LucideIcon } from 'lucide-react'
import type { AccentColor } from '../lib/accent'

/**
 * Conteúdo da página inicial.
 * Textos entre colchetes são MARCADORES TEMPORÁRIOS aguardando o conteúdo oficial da EAPE.
 */

export const heroContent = {
  intro: '[Texto de apresentação da EAPE — a confirmar]',
}

export interface CareArea {
  id: string
  title: string
  description: string
  icon: LucideIcon
  accent: AccentColor
}

/** Áreas descritas no contexto oficial do projeto: desenvolvimento, saúde e aprendizagem. */
export const careAreas: CareArea[] = [
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento',
    description: '[Descrição a confirmar]',
    icon: Sprout,
    accent: 'pink',
  },
  {
    id: 'saude',
    title: 'Saúde',
    description: '[Descrição a confirmar]',
    icon: HeartPulse,
    accent: 'cyan',
  },
  {
    id: 'aprendizagem',
    title: 'Aprendizagem',
    description: '[Descrição a confirmar]',
    icon: Lightbulb,
    accent: 'yellow',
  },
]

export const aboutContent = {
  text: '[Texto institucional sobre a EAPE — história, proposta e forma de atendimento — a confirmar]',
}

export const specialtiesContent = {
  intro: '[Texto introdutório sobre as especialidades e serviços — a confirmar]',
}
