import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * Rola até a âncora da URL (ex.: "/#especialidades") depois que a rota é renderizada.
 * Necessário porque, em uma SPA, o navegador procura a âncora antes de o React montar a página.
 */
export function useScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
  }, [hash])
}
