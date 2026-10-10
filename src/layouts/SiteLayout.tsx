import { Outlet } from 'react-router'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { ScrollTopButton } from '../components/layout/ScrollTopButton'
import { useScrollToHash } from '../hooks/useScrollToHash'

export function SiteLayout() {
  useScrollToHash()

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-60 rounded-md bg-navy font-bold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:px-4 focus:py-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
