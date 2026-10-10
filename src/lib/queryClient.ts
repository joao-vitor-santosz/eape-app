import { QueryClient } from '@tanstack/react-query'

/**
 * Configuração central do TanStack Query.
 * O site ainda não consome nenhuma API; o cliente fica disponível para
 * integrações futuras aprovadas.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})
