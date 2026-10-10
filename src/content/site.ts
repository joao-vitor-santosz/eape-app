/**
 * Informações institucionais da EAPE.
 *
 * Valores entre colchetes são MARCADORES TEMPORÁRIOS: ainda não foram
 * confirmados pela EAPE e devem ser substituídos antes da publicação.
 */
export const siteInfo = {
  shortName: 'EAPE',
  fullName: 'Espaço de Atendimento Pedagógico Especializado',
  contact: {
    phone: '[Telefone a confirmar]',
    email: '[E-mail a confirmar]',
    address: '[Endereço a confirmar]',
    openingHours: '[Horário de atendimento a confirmar]',
  },
} as const

export interface NavItem {
  label: string
  /** Rotas ("/") ou âncoras da página inicial ("/#secao"). */
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
  { label: 'Contato', to: '/#contato' },
]

export function isAnchorLink(to: string): boolean {
  return to.includes('#')
}
