import type { Professional } from '../types/professional'

/** Indica que os dados exibidos são de demonstração (apenas em desenvolvimento). */
export const isDemoData = import.meta.env.DEV

const MOCK_DELAY_MS = 600

/**
 * Busca os profissionais de uma especialidade.
 *
 * Ainda não existe API. Em desenvolvimento, retorna dados de demonstração com um
 * pequeno atraso (para exibir o estado de carregamento). Em produção, retorna uma
 * lista vazia — o import dos dados de demonstração é removido do build.
 *
 * Quando a API existir, substituir o corpo desta função pela requisição GET.
 */
export async function getProfessionalsBySpecialty(specialtyId: string): Promise<Professional[]> {
  if (import.meta.env.DEV) {
    const { mockProfessionals } = await import('../mocks/professionals')
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS))
    return mockProfessionals.filter((professional) => professional.specialtyIds.includes(specialtyId))
  }

  return []
}
