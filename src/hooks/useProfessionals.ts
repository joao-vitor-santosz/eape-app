import { useQuery } from '@tanstack/react-query'
import { getProfessionalsBySpecialty } from '../services/professionals'

export const professionalsKeys = {
  bySpecialty: (specialtyId: string) => ['professionals', 'by-specialty', specialtyId] as const,
}

/** Profissionais de uma especialidade. Só busca quando a especialidade existe (`enabled`). */
export function useProfessionals(specialtyId: string, enabled = true) {
  return useQuery({
    queryKey: professionalsKeys.bySpecialty(specialtyId),
    queryFn: () => getProfessionalsBySpecialty(specialtyId),
    enabled,
  })
}
