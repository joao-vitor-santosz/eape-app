/**
 * Informações institucionais da EAPE.
 *
 * Valores entre colchetes são MARCADORES TEMPORÁRIOS: ainda não foram
 * confirmados pela EAPE e devem ser substituídos antes da publicação.
 */
import { buildWhatsAppLink } from '../lib/whatsapp'

/** Número do WhatsApp da EAPE no formato internacional (usado nos links wa.me). */
export const WHATSAPP_NUMBER = '5569993843528'

export const siteInfo = {
  shortName: 'EAPE',
  fullName: 'Espaço de Atendimento Pedagógico Especializado',
  contact: {
    phone: { label: '(69) 99384-3528', href: 'tel:+5569993843528' },
    whatsapp: {
      label: '(69) 99384-3528',
      href: buildWhatsAppLink(
        WHATSAPP_NUMBER,
        'Olá! Encontrei o contato da EAPE pelo site e gostaria de mais informações.',
      ),
    },
    instagram: { label: '@eapepedagogico', href: 'https://www.instagram.com/eapepedagogico/' },
    email: '[E-mail a confirmar]',
    address: {
      label: 'R. Heitor Vila Lobos, 5448 - Flodoaldo Pontes Pinto, Porto Velho - RO',
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        'R. Heitor Vila Lobos, 5448, Flodoaldo Pontes Pinto, Porto Velho - RO',
      )}`,
    },
    openingHours: '[Horário de atendimento a confirmar]',
  },
} as const

export interface NavItem {
  label: string
  /** Rotas ("/"), âncoras da página inicial ("/#secao") ou da página atual ("#secao"). */
  to: string
}

/**
 * Enquanto as demais páginas não forem definidas, os itens apontam para
 * seções da página inicial.
 */
export const mainNav: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/#sobre' },
  { label: 'Especialidades', to: '/#especialidades' },
  { label: 'Nosso espaço', to: '/#espaco' },
  // O contato fica no rodapé, presente em todas as páginas.
  { label: 'Contato', to: '#contato' },
]

export function isAnchorLink(to: string): boolean {
  return to.includes('#')
}
