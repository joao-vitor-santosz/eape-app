import { Outlet, ScrollRestoration } from 'react-router'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { ScrollTopButton } from '../components/layout/ScrollTopButton'
import { TopBar } from '../components/layout/TopBar'
import { useScrollToHash } from '../hooks/useScrollToHash'

export function SiteLayout() {
  useScrollToHash()

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-60 rounded-full bg-navy font-heading font-medium text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:px-5 focus:py-3"
      >
        Pular para o conteúdo
      </a>
      <TopBar />
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
      {/* Ao trocar de página, volta ao topo (ou à âncora do link). */}
      {/* A chave pelo caminho evita herdar a rolagem de outra página aberta direto pelo endereço. */}
      <ScrollRestoration getKey={(location) => location.pathname} />
    </>
  )
}
